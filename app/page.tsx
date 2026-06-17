import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Layers,
  Users,
  ArrowRight,
  Sprout,
  Building2,
  Route,
  ChevronRight,
  ExternalLink,
  Handshake,
  ClipboardList,
  TrendingUp,
  Search,
  Hammer,
  FlaskConical,
  BarChart3,
  TreePine,
} from 'lucide-react';

export default function Page() {
  // 提供価値5つ
  const values = [
    {
      icon: <MapPin className="w-6 h-6 text-emerald-400" />,
      title: '場所がわかる',
      body: '圃場、水路、水口、農道、注意地点を地図上で共有し、誰でも同じ場所を確認できるようにします。',
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: '状態が残る',
      body: '見回りや作業の中で気づいた変化を記録し、個人の記憶に頼らず、現場の状態を残せるようにします。',
    },
    {
      icon: <Handshake className="w-6 h-6 text-emerald-400" />,
      title: '作業がつながる',
      body: '草刈り、水管理、収穫、袋かけ、水路清掃など、地域の中で必要な作業を共有し、助け合いや分担につなげます。',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: '経営が見える',
      body: '作付け、労働、機械、外注、販路、地域連携を組み合わせ、現実に回る農業経営モデルを検証します。',
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-emerald-400" />,
      title: '次に引き継げる',
      body: '圃場や作業の情報を、次の担い手や支援者に引き継げる形にし、地域農業の継続性を高めます。',
    },
  ];

  // What we do（5ステップ）
  const steps = [
    {
      label: '見つける',
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      text: '農家・地域・行政の現場から、まだ言語化されていない課題を拾い上げます。',
    },
    {
      label: 'つくる',
      icon: <Hammer className="w-5 h-5 text-emerald-400" />,
      text: '地図アプリ、記録ツール、作業共有、助け合いの仕組みなど、まず試せる形に落とします。',
    },
    {
      label: '試す',
      icon: <FlaskConical className="w-5 h-5 text-emerald-400" />,
      text: '実際の圃場や地域ネットワークで使いながら、使われるか・続くかを検証します。',
    },
    {
      label: '経営として検証する',
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      text: '作付け、労働、機械、外注、販路、地域連携を含め、農業経営として成り立つかを検証します。',
    },
    {
      label: '育てる',
      icon: <TreePine className="w-5 h-5 text-emerald-400" />,
      text: '実証結果をもとに、地域運用、行政連携、事業化、予防保全、経営モデル化へ接続します。',
    },
  ];

  // 展開フェーズ（後段）
  const phases = [
    {
      phase: 'Phase 1',
      title: '現場で使える実証アプリの開発',
      text: '協力農家や地域パートナーとともに、圃場情報の共有と農家同士の助け合いを支えるアプリを実証。',
      icon: <Sprout className="w-6 h-6 text-emerald-400" />,
    },
    {
      phase: 'Phase 2',
      title: '土地改良区・自治体との連携',
      text: '現場で蓄積された情報を、インフラ維持管理・長寿命化計画・予防保全の検討基盤として接続。',
      icon: <Building2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      phase: 'Phase 3',
      title: '地域インフラ全体への展開',
      text: '農業インフラを起点に、林道・小規模河川など同様の課題を持つ地域インフラ領域へ拡張。',
      icon: <Route className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* ===== ヘッダー ===== */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white">hojoudata</span>
            <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase">Regional Agriculture</span>
          </div>
          <nav className="hidden gap-8 text-base font-medium text-zinc-400 md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#what-we-do" className="transition-colors hover:text-white">What We Do</a>
            <a href="#products" className="transition-colors hover:text-white">Products</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== ファーストビュー ===== */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-emerald-500/10 opacity-50 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-8">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                農業現場の実証フィールド
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                農業現場の<br className="hidden sm:block" />
                困りごとを、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  試せるかたちに。
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-zinc-300 max-w-2xl mb-4">
                圃場、水路、作業、人手、経営。<br />
                地域農業を続けるために必要な仕組みを、現場の声と実証から小さくつくり、試し、育てていきます。
              </p>
              <p className="text-base leading-relaxed text-zinc-500 max-w-2xl mb-10">
                hojoudataは、農業現場にある課題を、アプリ・データ・運用設計・経営モデルに落とし込み、地域農業の持続可能性を高めるための実証開発に取り組んでいます。
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
                >
                  実証アプリを見る
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  お問い合わせ
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 提供価値5つ ===== */}
        <section className="py-24 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">Values</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-xl">
                農業を続けるために、必要なこと。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((item, idx) => (
                <div key={idx} className="group rounded-3xl border border-white/5 bg-zinc-900/30 p-7 hover:bg-zinc-900/60 transition-colors">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== About ===== */}
        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">About <span className="normal-case">hojoudata</span></h2>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-snug">
                  農業の現場で、<br />仮説検証を回す。
                </p>
                <div className="space-y-5 text-zinc-400 leading-relaxed text-base">
                  <p>
                    農業現場には、まだ言語化されていない困りごとが多くあります。
                    圃場の場所が共有されない。水路や水口の状態が引き継がれない。草刈りや収穫の人手が足りない。地域の助け合いが、個人の関係性に依存している。作付けや機械投資、労働配分が経営として本当に成り立つのか見えにくい。
                  </p>
                  <p>
                    hojoudataは、こうした課題を現場で観察し、小さなアプリや運用モデルとして試しながら、地域農業を続けるための仕組みに育てていきます。
                  </p>
                  <p>
                    農地の集積が進む一方で、担い手の減少と高齢化が続く中で、個人の記憶や地域の暗黙知に支えられてきた仕組みは、限界を迎えつつあります。
                  </p>
                  <p>
                    圃場・地点・作業・助け合い・インフラ・経営条件の情報を記録し、地域で共有・検証できる形にすることで、農業を続けるための基盤づくりを進めます。
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  { label: '担い手の課題', text: '農地の集積が進む一方、農業を担う人は年々減少しています。個人の経験と暗黙知だけでは、維持が難しくなっています。' },
                  { label: '情報の断絶', text: '圃場の場所、水管理の方法、草刈りの段取り、注意事項は、引き継がれにくい形で残ってきました。' },
                  { label: 'hojoudataの応え', text: '現場の困りごとを観察し、試せる形のアプリ・運用・経営モデルとしてつくり、地域で使いながら育てていきます。' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
                    <div className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-widest">{item.label}</div>
                    <p className="text-base text-zinc-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== What We Do（5ステップ） ===== */}
        <section id="what-we-do" className="py-24 lg:py-32 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">What We Do</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                現場課題を、使える仕組みに変える。
              </p>
              <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
                「見つける」から「育てる」まで。農業現場にある課題を、実際に動く仕組みへと変えていくプロセスで進めています。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="relative rounded-3xl border border-white/5 bg-zinc-900/30 p-7 hover:bg-zinc-900/60 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/50 border border-white/5">
                      {step.icon}
                    </div>
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.label}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed">{step.text}</p>
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-zinc-700 z-10">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-zinc-600 text-center">
              この流れは、くわだてカンパニーが進める「現場の企てを、試せるかたちにする」考え方と自然につながっています。
            </p>
          </div>
        </section>

        {/* ===== 実証アプリ紹介 ===== */}
        <section id="products" className="py-24 lg:py-32 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* ヘッダー */}
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">Field Apps</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                現場の仮説から生まれた実証アプリ
              </p>
              <div className="max-w-2xl space-y-3 text-base text-zinc-400 leading-relaxed">
                <p>
                  hojoudataでは、地域農業を続けるうえで現場が直面している課題を、小さなアプリとして形にし、実際の現場で検証しています。
                </p>
                <p>
                  圃場や注意地点を共有する「みんなの圃場マップ」。農家同士の助け合いを支える「あぐり結び」。
                  どちらも、現場の困りごとを起点に、地域で使える仕組みとして育てている実証プロダクトです。
                </p>
              </div>
            </div>

            <div className="space-y-16">
              {/* プロダクト1：みんなの圃場マップ */}
              <div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* 左：テキスト */}
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">App 01</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                        関係者限定で実証運用中
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white lg:text-3xl">みんなの圃場マップ</h3>
                    <p className="text-emerald-300 font-medium text-base">
                      圃場情報を、地域で共有できる地図アプリ。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      圃場の位置、面積、作物、注意事項、入口・落とし・水口などの登録地点を、地図上で分かりやすく共有できます。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      農地が分散している地域や、複数人で作業を分担する現場では、「どの圃場か分からない」「どこに注意すべきか伝わっていない」といった小さな情報不足が、作業効率や事故リスクに直結します。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      みんなの圃場マップは、圃場に関する情報を一元化し、農家・作業者・支援者が同じ情報を見ながら動ける状態をつくります。
                    </p>
                    {/* ステータスラベル（リンクなし） */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-400">
                        関係者限定で実証運用中
                      </span>
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-400">
                        地域内共有モデルを検証中
                      </span>
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-400">
                        圃場情報共有の実証プロトタイプ
                      </span>
                    </div>
                  </div>

                  {/* 右：画像2枚 */}
                  <div className="flex flex-row gap-4">
                    <figure className="flex-1 flex flex-col gap-2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-xl">
                        <div className="absolute inset-x-0 top-0 h-6 bg-zinc-900/80 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                        </div>
                        <Image
                          src="/fude-polygon-editor/browse-info.png"
                          alt="圃場ごとの作物・面積・注意点・登録地点を地図上で確認できる閲覧画面"
                          width={390}
                          height={720}
                          className="w-full h-auto pt-6"
                        />
                      </div>
                      <figcaption className="text-sm text-zinc-500 text-center px-1">
                        圃場ごとの作物・面積・注意点・登録地点を、地図上で確認できます。
                      </figcaption>
                    </figure>

                    <figure className="flex-1 flex flex-col gap-2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-xl">
                        <div className="absolute inset-x-0 top-0 h-6 bg-zinc-900/80 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                        </div>
                        <Image
                          src="/fude-polygon-editor/edit-view.png"
                          alt="圃場の形状や名称・作物・注意事項を登録・編集できる画面"
                          width={390}
                          height={720}
                          className="w-full h-auto pt-6"
                        />
                      </div>
                      <figcaption className="text-sm text-zinc-500 text-center px-1">
                        圃場の形状や名称、作物、注意事項を登録し、地域内で共有できます。
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>

              {/* プロダクト2：あぐり結び */}
              <div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* 左：画像3枚 */}
                  <div className="flex flex-row gap-3 lg:order-1 order-2">
                    <figure className="flex-1 flex flex-col gap-2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-xl">
                        <div className="absolute inset-x-0 top-0 h-6 bg-zinc-900/80 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                        </div>
                        <Image
                          src="/agri-payfoward/agri-top.png"
                          alt="あぐり結びトップ画面：地域の農家同士で助け合いを頼み合えるホーム"
                          width={390}
                          height={720}
                          className="w-full h-auto pt-6"
                        />
                      </div>
                      <figcaption className="text-sm text-zinc-500 text-center px-1">
                        地域内の信頼できる農家同士で、忙しい時期の手伝いを頼み合えます。
                      </figcaption>
                    </figure>

                    <figure className="flex-1 flex flex-col gap-2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-xl">
                        <div className="absolute inset-x-0 top-0 h-6 bg-zinc-900/80 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                        </div>
                        <Image
                          src="/agri-payfoward/agri-request.png"
                          alt="てつだい依頼一覧画面：作業内容・日時・募集人数を共有できる"
                          width={390}
                          height={720}
                          className="w-full h-auto pt-6"
                        />
                      </div>
                      <figcaption className="text-sm text-zinc-500 text-center px-1">
                        作業内容・日時・募集人数を共有し、必要なときだけ手伝いを募れます。
                      </figcaption>
                    </figure>

                    <figure className="flex-1 flex flex-col gap-2">
                      <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-xl">
                        <div className="absolute inset-x-0 top-0 h-6 bg-zinc-900/80 flex items-center justify-center">
                          <div className="w-16 h-1.5 bg-zinc-700 rounded-full"></div>
                        </div>
                        <Image
                          src="/agri-payfoward/agri-history.png"
                          alt="助け合い履歴画面：地域内の信頼と貢献が見える記録"
                          width={390}
                          height={720}
                          className="w-full h-auto pt-6"
                        />
                      </div>
                      <figcaption className="text-sm text-zinc-500 text-center px-1">
                        助け合いの履歴を残すことで、地域内の信頼と貢献が見えるようになります。
                      </figcaption>
                    </figure>
                  </div>

                  {/* 右：テキスト */}
                  <div className="flex flex-col gap-5 lg:order-2 order-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">App 02</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        実証運用中
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white lg:text-3xl">あぐり結び</h3>
                    <p className="text-emerald-300 font-medium text-base">
                      地域農家の助け合いを、見える形にするアプリ。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      農業には、収穫、草刈り、水路清掃、袋かけ、片付けなど、短期間だけ人手が必要になる作業が多くあります。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      一方で、地域の中には、別の時期であれば手伝える農家や、少しだけ作業に参加できる人もいます。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      あぐり結びは、地域内の信頼できる相手同士で「手伝ってほしい」と「手伝える」をつなぐ実証アプリです。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      作業依頼、参加、助け合い履歴を記録することで、単発の求人ではなく、地域内で支え合う関係を育てることを目指しています。
                    </p>
                    <div className="pt-2">
                      <a
                        href="https://app-b64270c7-eaf3-405b-afad-8050a2785775.ingress.apprun.sakura.ne.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-300 transition-all hover:bg-emerald-500/20 hover:text-emerald-200 hover:border-emerald-400/60"
                      >
                        あぐり結びのデモを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 締めコピー */}
            <div className="mt-16 text-center">
              <div className="inline-block rounded-2xl border border-white/5 bg-zinc-900/50 px-8 py-8">
                <p className="text-lg font-bold text-white leading-relaxed">
                  圃場を共有する。<br />
                  作業を助け合う。<br />
                  経営として試す。<br />
                  <span className="text-emerald-400">現場の情報を、地域の資産に変えていく。</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 農業経営モデル開発 ===== */}
        <section className="py-24 lg:py-32 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">Farm Management</h2>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-snug">
                  続けられる農業経営モデルを探る。
                </p>
                <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                  <p>
                    農業の持続可能性は、アプリやデータだけでは実現できません。
                    作付け、労働、機械、外注、販路、地域内の助け合い、インフラ維持。これらを組み合わせて、現実に回る経営モデルをつくる必要があります。
                  </p>
                  <p>
                    hojoudataでは、自らも農業現場に関わりながら、ユニットエコノミクスを重視した小さな実証を行い、地域の実情に合った農業経営モデルの開発に取り組んでいます。
                  </p>
                  <p>
                    単に規模を拡大するのではなく、無理なく続けられる面積、作業分担、設備投資、地域連携のあり方を検証していきます。
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  { label: '無理なく続く面積と作業分担', text: '一人や少人数で管理できる圃場面積と、地域での分担モデルを検証します。' },
                  { label: '機械・外注・助け合いの組み合わせ', text: '設備投資だけに頼らず、地域内の人手や外注を組み合わせた農業経営を試します。' },
                  { label: '地域連携と採算性の検証', text: '土地改良区、自治体、農業法人との連携も含め、現実に成り立つ経営モデルを探ります。' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
                    <div className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-widest">{item.label}</div>
                    <p className="text-base text-zinc-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 予防保全・公共インフラ（後段） ===== */}
        <section id="vision" className="py-24 lg:py-32 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">Next Step</h2>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-snug">
                  その先にある、<br />農業インフラの予防保全
                </p>
                <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                  <p>
                    圃場、水路、水口、畦畔、農道などの情報が地域で記録・共有されるようになると、日々の作業効率化だけでなく、インフラの状態変化を把握する基礎にもなります。
                  </p>
                  <p>
                    hojoudataは、現場で無理なく残る情報を積み重ねることで、将来的には土地改良区や自治体による予防保全、長寿命化、維持管理計画の検討にもつなげていきます。
                  </p>
                  <p>
                    日々の圃場管理から、地域インフラの維持管理へ。
                    現場で使える小さな仕組みから、持続可能な農業基盤づくりを進めます。
                  </p>
                </div>
              </div>
              <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
                {phases.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#09090b] bg-zinc-800 text-emerald-400">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-emerald-400 mb-1">{item.phase}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-base max-w-lg">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== パートナー募集 ===== */}
        <section className="py-24 px-6 lg:px-8 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-[#09090b] p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  実証・連携パートナーを<br />募集しています
                </h2>
                <p className="text-base text-zinc-400 leading-relaxed mb-8">
                  協力農家、土地改良区、自治体、研究者、地域インフラの維持管理に関わる事業者との連携を通じて、現場で使える情報共有・維持管理の仕組みを一緒につくっていきます。
                </p>
                <a
                  href="mailto:info@hojoudata.jp"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
                >
                  連携について問い合わせる
                </a>
              </div>
              <div className="grid gap-3">
                {[
                  '協力農家との実証設計・フィールドテスト',
                  '土地改良区・自治体との制度接続検討',
                  '研究開発・運用設計・地域展開の共同検証',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-base font-medium text-zinc-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== くわだてカンパニーとの関係 ===== */}
        <section className="py-20 px-6 lg:px-8 border-t border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-8 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Related Initiative</h2>
                  <p className="text-xl font-bold text-white mb-4">関連する取り組み</p>
                  <p className="text-base text-zinc-400 leading-relaxed mb-2">
                    hojoudataは、くわだてカンパニーが進める「現場の企てを、試せるかたちにする」活動のうち、農業・地域インフラ・農業経営領域における実装フィールドとして展開しています。
                  </p>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    地域、農業、教育、行政、事業開発など、領域をまたいで仮説検証とプロトタイピングを支援する取り組みについては、くわだてカンパニーをご覧ください。
                  </p>
                </div>
                <div className="flex lg:justify-end">
                  <a
                    href="https://www.kuwadate.company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white hover:border-zinc-600"
                  >
                    くわだてカンパニーを見る
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== フッター ===== */}
      <footer id="contact" className="border-t border-white/10 bg-[#09090b] pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            <div>
              <div className="text-2xl font-bold text-white mb-6">hojoudata合同会社</div>
              <p className="text-base leading-relaxed text-zinc-400 max-w-sm mb-8">
                農業現場の困りごとを、試せるかたちに変える実証フィールドです。
              </p>
              <div className="space-y-3 text-base text-zinc-500">
                <p>代表者：越智聖人</p>
                <p>所在地：東京都世田谷区池尻3-28-21</p>
                <p>フィールド：埼玉県加須市</p>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8 max-w-sm">
                <h3 className="text-sm font-bold text-white mb-4">Contact</h3>
                <p className="text-base text-zinc-400 mb-6">
                  連携・実証・取材・事業に関するお問い合わせはこちらからお願いいたします。
                </p>
                <a href="mailto:info@hojoudata.jp" className="text-emerald-400 hover:text-emerald-300 font-medium text-base flex items-center gap-2">
                  info@hojoudata.jp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} hojoudata LLC. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-zinc-600">
              <Link href="/privacy" className="hover:text-zinc-400">プライバシーポリシー</Link>
              <Link href="/" className="hover:text-zinc-400">運営会社</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
