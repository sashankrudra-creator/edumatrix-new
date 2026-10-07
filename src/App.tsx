import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, useLocation, useRoute, Router as WouterRouter } from 'wouter';
import { Shell } from '@/components/site/Shell';
import { HomePage } from '@/pages/home';
import { StemPage, AcademicsPage, InstitutionalPage } from '@/pages/listings';
import { ProgramsPage } from '@/pages/programs';
import { ProgramDetail } from '@/pages/program-detail';
import { AboutPage } from '@/pages/about';
import { ContactPage } from '@/pages/contact';
import { NotFound } from '@/pages/not-found';

const queryClient = new QueryClient();

function Routes() {
  const [match, params] = useRoute('/program/:slug');
  return (
    <ErrorBoundary resetKey={useLocation()[0]}>
      <Shell>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/stem-innovation" component={StemPage} />
          <Route path="/academics-testing" component={AcademicsPage} />
          <Route path="/institutional-b2b" component={InstitutionalPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          {match && params?.slug && <Route path="/program/:slug"><ProgramDetail slug={params.slug} /></Route>}
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </Shell>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Routes /></WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
