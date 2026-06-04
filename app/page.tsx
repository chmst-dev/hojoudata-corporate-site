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
} from 'lucide-react';

export default function Page() {
  // 提供価値4つ
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
      body: '草刈り、水管理、収穫、水路清掃など、地域の中で必要な作業を共有し、助け合いや分担につなげます。',
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-emerald-400" />,
      title: '次に引き継げる',
      body: '圃場や作業の情報を、次の担い手や支援者に引き継げる形にし、地域農業の継続性を高めます。',
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
            <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">Regional Agriculture</span>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
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
                地域農業の持続可能性を支える情報共有基盤
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                地域農業を、<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  続けられる形に。
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-zinc-400 max-w-2xl mb-4">
                圃場、水路、畦畔、農道、作業、人のつながり。
                地域農業を支える情報を見える化し、次の担い手へ引き継げる形にしていきます。
              </p>
              <p className="text-sm leading-relaxed text-zinc-500 max-w-2xl mb-10">
                hojoudataは、農業現場で失われがちな「場所・状態・作業・関係性」の情報を記録・共有し、持続可能な地域農業を支えるための実証開発に取り組んでいます。
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

        {/* ===== 提供価値4つ ===== */}
        <section className="py-24 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">What We Do</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-xl">
                農業を続けるために、必要なこと。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((item, idx) => (
                <div key={idx} className="group rounded-3xl border border-white/5 bg-zinc-900/30 p-7 hover:bg-zinc-900/60 transition-colors">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800/50 border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Vision / About ===== */}
        <section id="about" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">About <span className="normal-case">hojoudata</span></h2>
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 leading-snug">
                  地域で農業を続けるための、<br />共有基盤へ。
                </p>
                <div className="space-y-5 text-zinc-400 leading-relaxed text-sm">
                  <p>
                    農地の集積が進む一方で、水管理、草刈り、用排水路の維持、圃場情報の引き継ぎ、作業の助け合いは、個人の記憶や地域の暗黙知に支えられてきました。
                  </p>
                  <p>
                    しかし、担い手の減少と高齢化が進む中で、その仕組みは限界を迎えつつあります。
                  </p>
                  <p>
                    hojoudataは、圃場・地点・作業・助け合いの情報を記録し、地域で共有できる形にすることで、農業を続けるための基盤づくりを進めます。
                  </p>
                  <p>
                    将来的には、こうした情報を農業インフラの予防保全、土地改良区や自治体との連携、地域インフラの維持管理にもつなげていきます。
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  { label: '担い手', text: '農地の集積が進む一方、農業を担う人は年々減少しています。' },
                  { label: '情報の断絶', text: '圃場の場所、水管理の方法、注意事項は、引き継がれにくい形で残ってきました。' },
                  { label: 'hojoudataの応え', text: '現場で使えるアプリで、場所・状態・作業・助け合いを記録し、地域で共有します。' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
                    <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest">{item.label}</div>
                    <p className="text-sm text-zinc-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 実証アプリ紹介 ===== */}
        <section id="products" className="py-24 lg:py-32 border-t border-white/5 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* ヘッダー */}
            <div className="mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">Field Apps</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                地域農業を支える、2つの実証アプリ
              </p>
              <div className="max-w-2xl space-y-3 text-sm text-zinc-400 leading-relaxed">
                <p>
                  hojoudataでは、地域農業を続けるうえで現場が直面している「場所の共有」と「人手の共有」に着目し、2つの実証アプリを開発しています。
                </p>
                <p>
                  圃場や注意地点を共有する「みんなの圃場マップ」と、農家同士の助け合いを支える「あぐり結び」。
                  どちらも、地域の中にある情報や関係性を見える化し、農業を続けやすくするための取り組みです。
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
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      圃場の位置、面積、作物、注意事項、入口・落とし・水口などの登録地点を、地図上で分かりやすく共有できます。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      農地が分散している地域や、複数人で作業を分担する現場では、「どの圃場か分からない」「どこに注意すべきか伝わっていない」といった小さな情報不足が、作業効率や事故リスクに直結します。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
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

                  {/* 右：画像2枚（縦長全体表示） */}
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
                      <figcaption className="text-xs text-zinc-500 text-center px-1">
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
                      <figcaption className="text-xs text-zinc-500 text-center px-1">
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
                      <figcaption className="text-xs text-zinc-500 text-center px-1">
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
                      <figcaption className="text-xs text-zinc-500 text-center px-1">
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
                      <figcaption className="text-xs text-zinc-500 text-center px-1">
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
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      農業には、収穫、草刈り、水路清掃、袋かけ、片付けなど、短期間だけ人手が必要になる作業が多くあります。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      一方で、地域の中には、別の時期であれば手伝える農家や、少しだけ作業に参加できる人もいます。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      あぐり結びは、地域内の信頼できる相手同士で「手伝ってほしい」と「手伝える」をつなぐ実証アプリです。
                    </p>
                    <p className="text-zinc-400 leading-relaxed text-sm">
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
                  <span className="text-emerald-400">現場の情報を、地域の資産に変えていく。</span>
                </p>
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
                <div className="space-y-5 text-sm text-zinc-400 leading-relaxed">
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
                      <span className="text-sm font-bold text-emerald-400 mb-1">{item.phase}</span>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">{item.text}</p>
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
                <p className="text-zinc-400 leading-relaxed mb-8">
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
                    <span className="text-sm font-medium text-zinc-300">{text}</span>
                  </div>
                ))}
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
              <p className="text-sm leading-relaxed text-zinc-400 max-w-sm mb-8">
                地域農業を続けるための情報共有基盤づくりに取り組んでいます。
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
