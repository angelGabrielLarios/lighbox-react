import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  BasicExample,
  Playground,
  CustomSlides,
  Gallery,
  Carousel,
  CaptionsPlugin,
  CounterPlugin,
  DownloadPlugin,
  FullscreenPlugin,
  InlinePlugin,
  SharePlugin,
  SlideshowPlugin,
  ThumbnailsPlugin,
  VideoPlugin,
  ZoomPlugin,
} from '@/examples';
import { Paragraph } from '@/components';

import 'yet-another-react-lightbox/styles.css';

import '@/styles/App.css';

const navigation = [
  {
    section: { name: 'Examples', path: 'examples' },
    items: [
      { name: 'Basic Example', path: 'basic', element: <BasicExample /> },
      { name: 'Playground', path: 'playground', element: <Playground /> },
      {
        name: 'Custom Slides',
        path: 'custom-slides',
        element: <CustomSlides />,
      },
      { name: 'Photo Gallery', path: 'gallery', element: <Gallery /> },
      { name: 'Carousel', path: 'carousel', element: <Carousel /> },
    ],
  },
  {
    section: {
      name: 'Plugins',
      path: 'plugins',
    },
    items: [
      {
        name: 'Captions Plugin',
        path: 'captions',
        element: <CaptionsPlugin />,
      },
      {
        name: 'Counter Plugin',
        path: 'counter',
        element: <CounterPlugin />,
      },
      {
        name: 'Download Plugin',
        path: 'download',
        element: <DownloadPlugin />,
      },
      {
        name: 'Fullscreen Plugin',
        path: 'fullscreen',
        element: <FullscreenPlugin />,
      },
      { name: 'Inline Plugin', path: 'inline', element: <InlinePlugin /> },
      { name: 'Share Plugin', path: 'share', element: <SharePlugin /> },
      {
        name: 'Slideshow Plugin',
        path: 'slideshow',
        element: <SlideshowPlugin />,
      },
      {
        name: 'Thumbnails Plugin',
        path: 'thumbnails',
        element: <ThumbnailsPlugin />,
      },
      { name: 'Video Plugin', path: 'video', element: <VideoPlugin /> },
      { name: 'Zoom Plugin', path: 'zoom', element: <ZoomPlugin /> },
    ],
  },
];

function Layout() {
  return (
    <Container maxWidth="lg" className="App">
      <Typography variant="h1">Yet Another React Lightbox</Typography>

      <Divider />

      <nav>
        {navigation.map(({ section, items }) => (
          <section key={section.path}>
            <Typography>{section.name}:</Typography>
            {items.map(({ path, name }) => (
              <Link
                key={path}
                to={`/${section.path}/${path}`}
                component={NavLink}
                sx={{ '&.active': { fontWeight: 'bold' } }}
              >
                {name}
              </Link>
            ))}
          </section>
        ))}
      </nav>

      <Divider />

      <main>
        <Outlet />
      </main>
    </Container>
  );
}

function Placeholder() {
  return <Paragraph>Please select one of the demos above</Paragraph>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Placeholder />} />
          {navigation.map(({ section, items }) => (
            <Route key={section.path} path={section.path}>
              <Route index element={<Placeholder />} />
              {items.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
