import type { Children } from "@/lib/types/types";

type classNameProps = Children & {
  className?: string;
  backgroundColor?: string;
};

const Container = ({
  children,
  className,
  backgroundColor,
}: classNameProps) => {
  return (
    <section className={backgroundColor}>
      <div
        className={`py-8 lg:py-14 xl:py-16 2xl:py-24 px-2 container mx-auto ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
