import { cva } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  FunctionComponent,
  PropsWithChildren,
} from "react";

type PolymorphicAsProps<E extends ElementType> = {
  as?:
    | E
    | ComponentType<Omit<ComponentPropsWithoutRef<E>, "as">>
    | FunctionComponent<Omit<ComponentPropsWithoutRef<E>, "as">>;
};

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  Omit<ComponentPropsWithoutRef<E>, "as"> & PolymorphicAsProps<E>
>;

const typographyVariants = cva("", {
  variants: {
    variant: {},
  },
});
