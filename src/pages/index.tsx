import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { SvgWave } from '../components/Utilities/SvgWave/SvgWave';
import { TopNav } from '../components/TopNav/TopNav';

export default function HomePage() {
  return (
    <>
      <TopNav />
      <Welcome />
      <SvgWave />
    </>
  );
}