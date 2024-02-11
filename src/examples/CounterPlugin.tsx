import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/counter.css";

import { Paragraph, LightboxButton } from "@/components";
import slides from "@/data/slides";

export default function CounterPlugin() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Paragraph>Counter plugin adds slides counter to the lightbox.</Paragraph>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Counter]}
      />

      <LightboxButton onClick={() => setOpen(true)} />
    </>
  );
}
