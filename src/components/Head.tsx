import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`MattTheTekie - ${head.title}`}</title>
      <meta content={`MattTheTekie - ${head.title}`} property="og:title"/>
      <meta content="#0D0D0D" name="theme-color"/>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/94870997" />

      {head.meta.map((m) => <>
        <meta {...m} />
      </>)}

      {head.links.map((l) => <>
        <link {...l} />
      </>)}

      {head.styles.map((s) => <>
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      </>)}
    </>
  );
});
