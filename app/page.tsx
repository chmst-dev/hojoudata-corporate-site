import React from 'react';
import Image from 'next/image';
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
  LineChart,
  ExternalLink
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

        {/* ===== 現場から生まれた実証プロダクト ===== */}
        <section id="products" className="py-24 lg:py-32 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* セクションヘッダー */}
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3">Field Products</h2>
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                現場から生まれた実証プロダクト
              </p>
              <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm">
                hojoudataでは、農業現場で発生している「場所が分からない」「情報が引き継がれない」「人手が足りない」といった課題に対し、実際に使える小さなアプリケーションを開発しながら検証を進めています。
              </p>
              <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm mt-3">
                これらのプロダクトは、単なる便利ツールではありません。
                圃場・地点・作業・助け合いの情報を蓄積し、地域農業の維持管理を支えるデータ基盤へ発展させるための実証です。
              </p>
            </div>

            <div className="space-y-20 mt-16">
              {/* プロダクト1：みんなの圃場マップ */}
              <div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 lg:p-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                  {/* 左：テキスト */}
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Product 01</span>
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
                    {/* ステータスラベル群（リンクなし） */}
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
                  <div className="flex flex-col sm:flex-row gap-4 lg:order-1 order-2">
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
                          className="w-full h-auto object-cover pt-6"
                          style={{ maxHeight: '280px', objectFit: 'cover', objectPosition: 'top' }}
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
                          className="w-full h-auto object-cover pt-6"
                          style={{ maxHeight: '280px', objectFit: 'cover', objectPosition: 'top' }}
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
                          className="w-full h-auto object-cover pt-6"
                          style={{ maxHeight: '280px', objectFit: 'cover', objectPosition: 'top' }}
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
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Product 02</span>
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
                        あぐり結びを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* セクション末尾 締めコピー */}
            <div className="mt-20 text-center">
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
