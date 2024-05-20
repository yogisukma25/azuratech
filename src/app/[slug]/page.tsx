import React from "react";
import type { PageProps } from "@/types";

import { Container } from "@/components/Container";

export default function DynamicPageRoute(props: Readonly<PageProps>) {
  const slug = props.params?.slug;
  return (
    <Container>
      <div>Dynamic Page Route: {slug}</div>
    </Container>
  );
}
