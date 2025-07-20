import { act, renderHook } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import {
  formatBytes,
  useFileUpload,
  type FileMetadata,
} from "./use-file-upload";

// Mock URL methods
const mockCreateObjectURL = vi.fn();
const mockRevokeObjectURL = vi.fn();

beforeAll(() => {
  global.URL.createObjectURL = mockCreateObjectURL;
  global.URL.revokeObjectURL = mockRevokeObjectURL;
});

beforeEach(() => {
  vi.clearAllMocks();
  mockCreateObjectURL.mockReturnValue("mock-url");
});

const createMockFile = (name: string, size: number, type: string): File => {
  const file = new File(["content"], name, { type });
  Object.defineProperty(file, "size", { value: size });
  return file;
};

const createMockFileMetadata = (
  name: string,
  size: number,
  type: string,
  id: string,
  url: string
): FileMetadata => ({
  name,
  size,
  type,
  id,
  url,
});

describe("useFileUpload", () => {
  describe("initial state", () => {
    it("should initialize with empty state by default", () => {
      const { result } = renderHook(useFileUpload);
      const [state] = result.current;

      expect(state.files).toEqual([]);
      expect(state.isDragging).toBe(false);
      expect(state.errors).toEqual([]);
    });

    it("should initialize with provided initial files", () => {
      const initialFiles: FileMetadata[] = [
        createMockFileMetadata("test.txt", 100, "text/plain", "1", "test-url"),
      ];

      const { result } = renderHook(() => useFileUpload({ initialFiles }));
      const [state] = result.current;

      expect(state.files).toHaveLength(1);
      expect(state.files[0].file).toEqual(initialFiles[0]);
      expect(state.files[0].preview).toBe("test-url");
    });
  });

  describe("addFiles", () => {
    it("should add single file successfully", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(1);
      expect(state.files[0].file).toBe(file);
      expect(state.errors).toEqual([]);
    });

    it("should add multiple files when multiple is enabled", () => {
      const { result } = renderHook(() => useFileUpload({ multiple: true }));
      const [, actions] = result.current;
      const files = [
        createMockFile("test1.txt", 100, "text/plain"),
        createMockFile("test2.txt", 200, "text/plain"),
      ];

      act(() => {
        actions.addFiles(files);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(2);
    });

    it("should replace file in single mode", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;
      const file1 = createMockFile("test1.txt", 100, "text/plain");
      const file2 = createMockFile("test2.txt", 200, "text/plain");

      act(() => {
        actions.addFiles([file1]);
      });

      act(() => {
        actions.addFiles([file2]);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(1);
      expect(state.files[0].file).toBe(file2);
    });

    it("should reject files exceeding maxSize", () => {
      const { result } = renderHook(() => useFileUpload({ maxSize: 50 }));
      const [, actions] = result.current;
      const file = createMockFile("large.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(0);
      expect(state.errors).toHaveLength(1);
      expect(state.errors[0]).toContain("exceeds the maximum size");
    });

    it("should reject files not matching accept types", () => {
      const { result } = renderHook(() => useFileUpload({ accept: "image/*" }));
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(0);
      expect(state.errors).toHaveLength(1);
      expect(state.errors[0]).toContain("not an accepted file type");
    });

    it("should respect maxFiles limit", () => {
      const { result } = renderHook(() =>
        useFileUpload({ multiple: true, maxFiles: 2 })
      );
      const [, actions] = result.current;
      const files = [
        createMockFile("test1.txt", 100, "text/plain"),
        createMockFile("test2.txt", 100, "text/plain"),
      ];

      act(() => {
        actions.addFiles(files);
      });

      const moreFiles = [createMockFile("test3.txt", 100, "text/plain")];

      act(() => {
        actions.addFiles(moreFiles);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(2);
      expect(state.errors).toHaveLength(1);
      expect(state.errors[0]).toContain("maximum of 2 files");
    });

    it("should skip duplicate files in multiple mode", () => {
      const { result } = renderHook(() => useFileUpload({ multiple: true }));
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(1);
    });
  });

  describe("removeFile", () => {
    it("should remove file by id", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      const fileId = state.files[0].id;

      act(() => {
        actions.removeFile(fileId);
      });

      const [newState] = result.current;
      expect(newState.files).toHaveLength(0);
    });

    it("should revoke object URL when removing image file", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;
      const file = createMockFile("test.jpg", 100, "image/jpeg");

      act(() => {
        actions.addFiles([file]);
      });

      const [state] = result.current;
      const fileId = state.files[0].id;

      act(() => {
        actions.removeFile(fileId);
      });

      expect(mockRevokeObjectURL).toHaveBeenCalledWith("mock-url");
    });
  });

  describe("clearFiles", () => {
    it("should clear all files", () => {
      const { result } = renderHook(() => useFileUpload({ multiple: true }));
      const [, actions] = result.current;
      const files = [
        createMockFile("test1.txt", 100, "text/plain"),
        createMockFile("test2.txt", 200, "text/plain"),
      ];

      act(() => {
        actions.addFiles(files);
      });

      act(() => {
        actions.clearFiles();
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(0);
      expect(state.errors).toHaveLength(0);
    });
  });

  describe("drag and drop handlers", () => {
    it("should set isDragging to true on drag enter", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mockEvent: any = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      };

      act(() => {
        actions.handleDragEnter(mockEvent);
      });

      const [state] = result.current;
      expect(state.isDragging).toBe(true);
    });

    it("should set isDragging to false on drag leave", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mockEvent: any = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
        currentTarget: { contains: vi.fn().mockReturnValue(false) },
        relatedTarget: null,
      };

      act(() => {
        actions.handleDragEnter(mockEvent);
      });

      act(() => {
        actions.handleDragLeave(mockEvent);
      });

      const [state] = result.current;
      expect(state.isDragging).toBe(false);
    });

    it("should handle drop and add files", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;

      const file = createMockFile("test.txt", 100, "text/plain");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mockEvent: any = {
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
        dataTransfer: {
          files: [file],
        },
      };

      act(() => {
        actions.handleDrop(mockEvent);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(1);
      expect(state.isDragging).toBe(false);
    });
  });

  describe("file input handling", () => {
    it("should handle file input change", () => {
      const { result } = renderHook(useFileUpload);
      const [, actions] = result.current;

      const file = createMockFile("test.txt", 100, "text/plain");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mockEvent: any = {
        target: {
          files: [file],
        },
      };

      act(() => {
        actions.handleFileChange(mockEvent);
      });

      const [state] = result.current;
      expect(state.files).toHaveLength(1);
    });

    it("should return correct input props", () => {
      const { result } = renderHook(() =>
        useFileUpload({ accept: "image/*", multiple: true })
      );
      const [, actions] = result.current;

      const inputProps = actions.getInputProps();

      expect(inputProps.type).toBe("file");
      expect(inputProps.accept).toBe("image/*");
      expect(inputProps.multiple).toBe(true);
      expect(typeof inputProps.onChange).toBe("function");
    });
  });

  describe("callbacks", () => {
    it("should call onFilesChange when files are added", () => {
      const onFilesChange = vi.fn();
      const { result } = renderHook(() => useFileUpload({ onFilesChange }));
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      expect(onFilesChange).toHaveBeenCalled();
    });

    it("should call onFilesAdded when new files are added", () => {
      const onFilesAdded = vi.fn();
      const { result } = renderHook(() => useFileUpload({ onFilesAdded }));
      const [, actions] = result.current;
      const file = createMockFile("test.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      expect(onFilesAdded).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            file,
            id: expect.any(String),
            preview: "mock-url",
          }),
        ])
      );
    });
  });

  describe("clearErrors", () => {
    it("should clear all errors", () => {
      const { result } = renderHook(() => useFileUpload({ maxSize: 50 }));
      const [, actions] = result.current;
      const file = createMockFile("large.txt", 100, "text/plain");

      act(() => {
        actions.addFiles([file]);
      });

      act(() => {
        actions.clearErrors();
      });

      const [state] = result.current;
      expect(state.errors).toHaveLength(0);
    });
  });
});

describe("formatBytes", () => {
  it("should format bytes correctly", () => {
    expect(formatBytes(0)).toBe("0 Bytes");
    expect(formatBytes(1024)).toBe("1KB");
    expect(formatBytes(1048576)).toBe("1MB");
    expect(formatBytes(1073741824)).toBe("1GB");
  });

  it("should handle decimal places", () => {
    expect(formatBytes(1536, 1)).toBe("1.5KB");
    expect(formatBytes(1536, 0)).toBe("2KB");
  });
});
