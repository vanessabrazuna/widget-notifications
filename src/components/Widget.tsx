import { Header } from '@/components/Header'
import { RecentSection } from '@/components/RecentSection'
import { OldSection } from '@/components/OldSection'

export function Widget() {
  return (
    <div className="w-[448px] rounded overflow-hidden">
      <Header />
      <RecentSection />
      <OldSection />
    </div>
  );
}
