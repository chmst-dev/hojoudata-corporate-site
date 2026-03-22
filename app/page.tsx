import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  History,
  ArrowRightLeft,
  Activity,
  Sprout,
  Building2,
  Route,
  ChevronRight,
  Database,
  ShieldCheck,
  LineChart
} from 'lucide-react';

export default function Page() {
  const sections = [
    {
      title: "農業インフラの“情報の空白”を埋める",
      body: "hojoudata合同会社は、水路・水口・畦畔・農道などの農業インフラにおける状態変化を、地点単位で継続的に蓄積する履歴基盤を研究・開発しています。",
      icon: <Database className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Why",
      body: "老朽化した農業インフラは、経験依存型維持管理が限界を迎えています。どこで何がどう変化したかの履歴がなく、補修の優先順位づけや予算判断の説明責任を果たしにくいのが現状です。",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "What",
      body: "状態を地点IDに紐づけて記録し、写真・位置情報・時系列の差分を蓄積。判断を自動化するのではなく、判断に必要な「現場エビデンス」を継続的に残すことを目指します。",
      icon: <LineChart className="w-6 h-6 text-emerald-400" />
    },
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "研究・実証",
      text: "協力農家や実証パートナーとともに、継続的な記録行為が現場で成立するかを検証。",
      icon: <Sprout className="w-6 h-6 text-emerald-400" />
    },
    {
      phase: "Phase 2",
      title: "土地改良区・自治体導入",
      text: "長寿命化・防災減災予算の執行根拠となるエビデンス基盤として接続。",
      icon: <Building2 className="w-6 h-6 text-emerald-400" />
    },
    {
      phase: "Phase 3",
      title: "周辺インフラへ展開",
      text: "林道、小規模河川など、同様の構造課題を持つ地域インフラ領域へ拡張。",
      icon: <Route className="w-6 h-6 text-emerald-400" />
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">hojoudata</span>
            <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">Agricultural Infrastructure</span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#vision" className="transition-colors hover:text-white">Vision</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-emerald-500/10 opacity-50 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                見回りのついでに、インフラ予防保全。
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                農業インフラの <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  “情報の空白”
                </span>
                を埋める。
              </h1>
              <p className="text-lg leading-relaxed text-zinc-400 max-w-2xl mb-10">
                水路・水口・畦畔・農道などの状態変化を地点単位で蓄積し、事後保全から予防保全への転換を支える現場エビデンス基盤。
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105">
                  お問い合わせ
                </a>
                <a href="#vision" className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">
                  取り組みを見る
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2 lg:row-span-2 rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Vision</div>
                  <h3 className="text-2xl font-bold text-white mb-4">公共インフラ予算執行のための<br/>エビデンス基盤へ</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    現場で継続的に履歴が蓄積されることで、補修判断・長寿命化計画・予算説明の基礎データを支えます。データは語る、静かな崩壊を防ぐために。
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-colors">
                <MapPin className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">地点</h4>
                <p className="text-sm text-zinc-400">Location IDで対象を特定しブレを防ぐ</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-colors">
                <History className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">履歴</h4>
                <p className="text-sm text-zinc-400">時系列の変化を連続記録し蓄積する</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-colors">
                <ArrowRightLeft className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">差分</h4>
                <p className="text-sm text-zinc-400">前回との変化を視覚的に比較・検知</p>
              </div>

              <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-colors">
                <Activity className="w-8 h-8 text-teal-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">現場</h4>
                <p className="text-sm text-zinc-400">自然な行動の中で無理なく記録が成立</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">About hojoudata</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">インフラ管理のパラダイムシフト</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {sections.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>
                  <div className="h-full rounded-3xl border border-white/5 bg-zinc-900/30 p-8">
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 border border-white/5">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="py-24 lg:py-32 border-y border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">Roadmap</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">段階的な社会実装</p>
            </div>
            <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
              {phases.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#09090b] bg-zinc-800 text-emerald-400">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-emerald-400 mb-1">{item.phase}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-[#09090b] p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">実証・連携パートナーを<br/>募集しています</h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  協力農家、土地改良区、自治体、研究者、地域インフラの維持管理に関わる事業者との連携を通じて、現場で機能する観測・履歴蓄積の標準を形にしていきます。
                </p>
                <a href="mailto:info@hojoudata.jp" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105">
                  連携について問い合わせる
                </a>
              </div>
              <div className="grid gap-3">
                {['協力農家との実証設計', '土地改良区・自治体との制度接続検討', '研究開発・データモデル・運用設計の共同検証'].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-zinc-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-[#09090b] pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <div className="text-2xl font-bold text-white mb-6">hojoudata合同会社</div>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-sm mb-8">
                農業インフラの履歴を残し、地域の維持管理を未来につなぐための基盤づくりに取り組んでいます。
              </p>
              <div className="space-y-3 text-sm text-zinc-500">
                <p>代表者：越智聖人</p>
                <p>所在地：東京都世田谷区池尻3-28-21</p>
                <p>フィールド：埼玉県加須市</p>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 max-w-sm">
                <h3 className="text-sm font-bold text-white mb-4">Contact</h3>
                <p className="text-sm text-zinc-400 mb-6">
                  連携・実証・取材・事業に関するお問い合わせはこちらからお願いいたします。
                </p>
                <a href="mailto:info@hojoudata.jp" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm flex items-center gap-2">
                  info@hojoudata.jp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">© {new Date().getFullYear()} hojoudata LLC. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-zinc-600">
              <Link href="/privacy" className="hover:text-zinc-400">プライバシーポリシー</Link>
              <Link href="/" className="hover:text-zinc-400">運営会社</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
