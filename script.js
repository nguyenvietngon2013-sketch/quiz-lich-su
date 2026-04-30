const STORAGE_KEY = "study-hub-v4";
const STORAGE_KEY = "study-hub-history-v6";

const curriculum = [
  {
    title: "Lịch sử",
    shortTitle: "Sử 7",
    icon: "LS",
    colorClass: "history",
    tagline: "Kháng chiến chống Mông - Nguyên, nhà Hồ và khởi nghĩa Lam Sơn.",
    tagline: "Ba lần kháng chiến chống Mông - Nguyên, nhà Hồ và khởi nghĩa Lam Sơn.",
    modules: [
      {
        id: "mcq",
        partLabel: "A. Trắc nghiệm",
        label: "Trắc nghiệm",
        shortLabel: "20 TN",
        description: "20 câu chọn 1 đáp án đúng",
              D: "Được áp dụng trong cả ba lần kháng chiến."
            },
            correct: "D",
            explanation: 'Nhà Trần áp dụng kế sách "vườn không nhà trống" trong cả ba lần kháng chiến để kéo dài thời gian và làm suy yếu quân địch.'
            explanation: 'Kế sách "vườn không nhà trống" được nhà Trần áp dụng trong cả ba lần kháng chiến để kéo dài thời gian và làm suy yếu quân địch.'
          },
          {
            id: 2,
              D: "Nguyên soái"
            },
            correct: "C",
            explanation: "Trần Quốc Tuấn được giao chức Quốc công tiết chế để thống lĩnh lực lượng kháng chiến của nhà Trần."
            explanation: "Trần Quốc Tuấn được giao chức Quốc công tiết chế để chỉ huy toàn bộ lực lượng kháng chiến của nhà Trần."
          },
          {
            id: 3,
              D: "Nam dược thần hiệu"
            },
            correct: "C",
            explanation: '"Hịch tướng sĩ" là tác phẩm dùng để khích lệ lòng yêu nước và tinh thần chiến đấu của quân sĩ.'
            explanation: '"Hịch tướng sĩ" là tác phẩm nổi tiếng dùng để khích lệ lòng yêu nước và tinh thần chiến đấu của quân sĩ.'
          },
          {
            id: 4,
              D: "Quân và dân nhà Trần có tinh thần quyết chiến quyết thắng."
            },
            correct: "A",
            explanation: "Nhà Trần chăm lo đời sống nhân dân và phát huy sức mạnh toàn dân nên tạo được khối đoàn kết chống giặc."
            explanation: "Việc chăm lo sức dân và phát huy sức mạnh toàn dân là nền tảng tạo nên khối đoàn kết chống giặc."
          },
          {
            id: 5,
              D: "Con đường rút lui về Thăng Long thuận lợi."
            },
            correct: "A",
            explanation: "Nhà Trần lợi dụng quy luật thuỷ triều trên sông Bạch Đằng để nhử quân địch vào trận địa cọc."
            explanation: "Nhà Trần tận dụng quy luật thuỷ triều lên xuống trên sông Bạch Đằng để nhử quân địch vào trận địa cọc."
          },
          {
            id: 6,
              D: "Đưa Đại Việt trở thành nước hùng mạnh nhất khu vực Đông Nam Á."
            },
            correct: "D",
            explanation: "Chiến thắng có ý nghĩa lớn nhưng không đồng nghĩa Đại Việt trở thành nước mạnh nhất khu vực."
            explanation: "Ba lần kháng chiến có ý nghĩa rất lớn nhưng không đồng nghĩa Đại Việt trở thành nước mạnh nhất khu vực."
          },
          {
            id: 7,
              D: "Đánh nhanh thắng nhanh."
            },
            correct: "D",
            explanation: 'Kế sách này nhằm tiêu hao địch và chờ phản công, không phải để "đánh nhanh thắng nhanh".'
            explanation: 'Kế sách này nhằm tiêu hao địch, bảo toàn lực lượng và chờ phản công, không phải để "đánh nhanh thắng nhanh".'
          },
          {
            id: 8,
              D: "quý tộc Trần suy tôn Hồ Quý Ly lên ngôi."
            },
            correct: "B",
            explanation: "Theo bảng đáp án bạn cung cấp, ý đúng được chốt là Hồ Quý Ly buộc vua Trần nhường ngôi để lập ra nhà Hồ."
            explanation: "Theo bộ đáp án bạn đã chốt, ý đúng là Hồ Quý Ly buộc vua Trần nhường ngôi để lập ra nhà Hồ."
          },
          {
            id: 10,
              D: "Muốn biến Đại Việt trở thành nước hùng mạnh nhất khu vực thời bấy giờ."
            },
            correct: "C",
            explanation: "Cuối thời Trần, xã hội khủng hoảng sâu sắc nên Hồ Quý Ly tiến hành cải cách để ổn định đất nước."
            explanation: "Cuối thời Trần, xã hội rơi vào khủng hoảng sâu sắc nên Hồ Quý Ly tiến hành cải cách để ổn định đất nước."
          },
          {
            id: 11,
              D: "Trần Trí."
            },
            correct: "C",
            explanation: "Tướng Minh Liễu Thăng bị phục kích và bị giết tại ải Chi Lăng trong chiến dịch năm 1427."
            explanation: "Tướng Minh Liễu Thăng bị giết tại ải Chi Lăng trong chiến dịch năm 1427."
          },
          {
            id: 20,
              D: "Do nghĩa quân Lam Sơn có tinh thần kỉ luật cao, lực lượng đông đảo và vũ khí tốt."
            },
            correct: "A",
            explanation: "Theo bảng đáp án bạn chốt, nguyên nhân quan trọng nhất được xác định là tinh thần yêu nước và quyết tâm giành lại độc lập của nhân dân ta."
            explanation: "Theo bộ đáp án đã chốt, nguyên nhân quan trọng nhất là tinh thần yêu nước và quyết tâm giành lại độc lập của nhân dân ta."
          }
        ]
      },
      {
        id: "tf",
        partLabel: "B. Đúng / Sai",
        label: "Đúng / Sai",
        shortLabel: "6 Đ/S",
        description: "1 câu gồm 6 nhận định",
                key: "A",
                text: "Năm 1271, Hốt Tất Liệt lập ra nhà Nguyên, ráo riết chuẩn bị xâm lược Đại Việt.",
                correct: true,
                explanation: "Nhận định này đúng vì nhà Nguyên được thành lập năm 1271."
                explanation: "Nhận định này đúng vì nhà Nguyên được thành lập vào năm 1271."
              },
              {
                key: "B",
                key: "C",
                text: '"Bệ hạ chém đầu thần trước rồi hãy hàng" là câu nói của Trần Quốc Tuấn khi trả lời vua Trần Thánh Tông.',
                correct: true,
                explanation: "Theo lời giải SBT phổ biến, nhận định này được xác định là đúng."
                explanation: "Nhận định này đúng theo nội dung thường dùng trong sách bài tập và các nguồn ôn tập lớp 7."
              },
              {
                key: "D",
                text: "Năm 1289, Trần Quốc Tuấn được vua phong tước Hưng Đạo Đại Vương.",
                correct: false,
                explanation: "Theo đáp án SBT, nhận định này là sai."
                explanation: "Nhận định này sai theo đáp án chuẩn của bộ bài tập lớp 7 cho phần này."
              },
              {
                key: "E",
                text: "Trận Bạch Đằng (năm 1288) đã đánh tan cánh quân chở lương thảo của quân Nguyên.",
                correct: false,
                explanation: "Nhận định này sai vì cánh quân chở lương thảo bị đánh ở Vân Đồn; Bạch Đằng tiêu diệt đoàn thuyền chiến rút lui."
                explanation: "Nhận định này sai vì cánh quân chở lương bị đánh ở Vân Đồn; Bạch Đằng tiêu diệt đoàn thuyền chiến rút lui."
              },
              {
                key: "F",
                text: "Năm 1288, trên đường bộ, Thoát Hoan phải chui vào ống đồng bắt quân lính khiêng, tháo chạy về nước.",
                correct: false,
                explanation: "Nhận định này sai theo đáp án SBT cho bộ câu hỏi này."
                explanation: "Nhận định này sai theo đáp án bộ bài tập; chi tiết chui ống đồng thường gắn với đợt tháo chạy năm 1285."
              }
            ]
          }
  }
];

const appRoot = document.getElementById("appRoot");
const app = document.getElementById("app");

const state = {
  view: "home",
  subjectId: null,
  moduleId: null,
  currentIndex: 0,
  questionIndex: 0,
  reviewMode: "idle",
  store: loadStore()
};
  return subject.modules.find((module) => module.id === moduleId);
}

function getProgressBucket(subjectId, moduleId) {
function getBucket(subjectId, moduleId) {
  state.store.progress[subjectId] ??= {};
  state.store.progress[subjectId][moduleId] ??= {
    answers: {},
    currentIndex: 0
    questionIndex: 0
  };

  return state.store.progress[subjectId][moduleId];
  }

  const firstModule = subject.modules[0];
  const bucket = getBucket(subjectId, firstModule.id);

  state.view = "subject";
  state.subjectId = subjectId;
  state.moduleId = firstModule.id;
  state.currentIndex = getProgressBucket(subjectId, firstModule.id).currentIndex || 0;
  state.questionIndex = bucket.questionIndex || 0;
  resetReviewMode();
  renderApp();
}
    return;
  }

  const bucket = getBucket(state.subjectId, moduleId);
  state.moduleId = moduleId;
  state.currentIndex = getProgressBucket(state.subjectId, moduleId).currentIndex || 0;
  state.questionIndex = bucket.questionIndex || 0;
  resetReviewMode();
  renderApp();
}

function setCurrentIndex(index) {
function moveToQuestion(index) {
  const subject = getSubject(state.subjectId);
  const module = getModule(subject, state.moduleId);
  const safeIndex = Math.max(0, Math.min(index, module.questions.length - 1));
  state.currentIndex = safeIndex;
  getProgressBucket(state.subjectId, state.moduleId).currentIndex = safeIndex;
  const bucket = getBucket(state.subjectId, state.moduleId);

  state.questionIndex = safeIndex;
  bucket.questionIndex = safeIndex;
  saveStore();
  renderApp();
}

function setMcqAnswer(questionId, choice) {
  const bucket = getProgressBucket(state.subjectId, state.moduleId);
  const bucket = getBucket(state.subjectId, state.moduleId);
  bucket.answers[String(questionId)] = choice;
  saveStore();
  resetReviewMode();
}

function setTfAnswer(questionId, statementKey, value) {
  const bucket = getProgressBucket(state.subjectId, state.moduleId);
  const bucket = getBucket(state.subjectId, state.moduleId);
  bucket.answers[`${questionId}:${statementKey}`] = value;
  saveStore();
  resetReviewMode();
  renderApp();
}

function resetCurrentModule() {
  const confirmed = window.confirm("Xoá tiến độ của phần này và làm lại từ đầu?");
function resetModuleProgress() {
  const confirmed = window.confirm("Xóa toàn bộ tiến độ của phần này và làm lại từ đầu?");
  if (!confirmed) {
    return;
  }

  state.store.progress[state.subjectId][state.moduleId] = {
    answers: {},
    currentIndex: 0
    questionIndex: 0
  };
  state.currentIndex = 0;
  state.questionIndex = 0;
  resetReviewMode();
  saveStore();
  renderApp();
}

function percentage(value, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((value / total) * 100);
}

function getMcqStats(module, answers) {
  const total = module.questions.length;
  let answered = 0;
  let correct = 0;

  const questionStates = module.questions.map((question) => {
  const history = module.questions.map((question) => {
    const selected = answers[String(question.id)] || null;
    const isAnswered = Boolean(selected);
    const isCorrect = selected === question.correct;
    const done = Boolean(selected);
    const ok = selected === question.correct;

    if (isAnswered) {
    if (done) {
      answered += 1;
    }

    if (isCorrect) {
    if (ok) {
      correct += 1;
    }

    return {
      id: question.id,
      answered: isAnswered,
      correct: isCorrect
      answered: done,
      partial: false,
      correct: ok
    };
  });

  return {
    totalUnits: total,
    totalUnits: module.questions.length,
    answeredUnits: answered,
    correctUnits: correct,
    score: total === 0 ? 0 : (correct / total) * 10,
    history: questionStates
    score: module.questions.length === 0 ? 0 : (correct / module.questions.length) * 10,
    history
  };
}


    question.statements.forEach((statement) => {
      totalUnits += 1;

      const key = `${question.id}:${statement.key}`;
      const value = answers[key];
      const isAnswered = typeof value === "boolean";
      const value = answers[`${question.id}:${statement.key}`];
      const done = typeof value === "boolean";
      const ok = value === statement.correct;

      if (isAnswered) {
      if (done) {
        answeredUnits += 1;
        localAnswered += 1;
      }

      if (value === statement.correct) {
      if (ok) {
        correctUnits += 1;
        localCorrect += 1;
      }
    : getTfStats(module, answers);
}

function getSelectedLabel(correct) {
  return correct ? "Đúng" : "Sai";
}

function getCompletionPercent(answered, total) {
  if (total === 0) {
    return 0;
  }

  return Math.round((answered / total) * 100);
}

function getPerformanceLabel(score) {
  if (score >= 9) {
    return {
      title: "Rất chắc bài",
      copy: "Bạn đang nắm phần kiến thức này rất tốt, chỉ cần rà lại các câu dễ nhầm."
    };
  }

  if (score >= 7) {
    return {
      title: "Đang vào form",
      copy: "Nền tảng đã ổn, nên ôn lại các mốc sự kiện và ý nghĩa lịch sử để chốt điểm."
    };
  }

  return {
    title: "Cần ôn thêm",
    copy: "Nên làm lại phần này và xem kỹ giải thích ở các câu sai hoặc bỏ trống."
  };
}

function getSubjectStats(subject) {
  let totalUnits = 0;
  let answeredUnits = 0;
  let correctUnits = 0;

  const modules = subject.modules.map((module) => {
    const bucket = getProgressBucket(subject.id, module.id);
    const bucket = getBucket(subject.id, module.id);
    const stats = getModuleStats(module, bucket.answers);

    totalUnits += stats.totalUnits;
    correctUnits += stats.correctUnits;

    return {
      id: module.id,
      module,
      stats
    };
  });
    totalUnits,
    answeredUnits,
    correctUnits,
    modules,
    completion: getCompletionPercent(answeredUnits, totalUnits)
    completion: percentage(answeredUnits, totalUnits),
    modules
  };
}

function getPerformance(score) {
  if (score >= 9) {
    return {
      title: "Rất chắc bài",
      text: "Bạn đang nắm khá vững phần kiến thức này."
    };
  }

  if (score >= 7) {
    return {
      title: "Đang vào form",
      text: "Nền tảng đã ổn, chỉ cần rà thêm những câu dễ nhầm."
    };
  }

  return {
    title: "Cần ôn thêm",
    text: "Nên xem lại phần giải thích ở các câu sai hoặc bỏ trống."
  };
}

function renderHomeView() {
  const upcoming = [
    { title: "Địa lí", note: "Sẽ gắn vào cùng hệ thống khi có bộ câu hỏi." },
    { title: "Sinh học", note: "Có thể thêm cả trắc nghiệm và đúng sai." },
    { title: "Vật lí", note: "Giữ nguyên flow hiện tại, chỉ thay dữ liệu." }
  const placeholders = [
    {
      title: "Địa lí",
      note: "Khi có bộ câu hỏi, chỉ cần thêm dữ liệu vào cùng cấu trúc này."
    },
    {
      title: "Sinh học",
      note: "Có thể gắn thêm phần trắc nghiệm và đúng sai riêng."
    },
    {
      title: "Vật lí",
      note: "Giữ nguyên layout, chỉ thay dữ liệu từng môn."
    }
  ];

  const summaries = curriculum.map((subject) => ({
    stats: getSubjectStats(subject)
  }));

  const totalSubjects = summaries.length;
  const totalModules = summaries.reduce((sum, item) => sum + item.subject.modules.length, 0);
  const totalUnits = summaries.reduce((sum, item) => sum + item.stats.totalUnits, 0);
  const answeredUnits = summaries.reduce((sum, item) => sum + item.stats.answeredUnits, 0);
  const homeCompletion = getCompletionPercent(answeredUnits, totalUnits);
  const completion = percentage(answeredUnits, totalUnits);

  const cards = summaries.map(({ subject, stats }) => {
  const activeCards = summaries.map(({ subject, stats }) => {
    const moduleTags = subject.modules
      .map((module) => `<span class="module-mini-tag">${module.shortLabel}</span>`)
      .join("");

    return `
      <button class="subject-card ${subject.colorClass} fade-up" data-action="open-subject" data-subject-id="${subject.id}">
      <button class="subject-card history fade-up" data-action="open-subject" data-subject-id="${subject.id}">
        <div class="subject-card-top">
          <span class="subject-icon">${subject.icon}</span>
          <span class="tag-pill">${stats.completion}% hoàn thành</span>
          <span class="pill">${stats.completion}% hoàn thành</span>
        </div>
        <h2>${subject.title}</h2>
        <div class="card-copy">
          <p>${subject.tagline}</p>
        </div>
        <p>${subject.tagline}</p>
        <div class="subject-progress">
          <div class="progress-bar"><span style="width: ${stats.completion}%"></span></div>
          <div class="progress-track"><span style="width: ${stats.completion}%"></span></div>
          <div class="subject-card-foot">
            <div>
              <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
              <div class="meta-kicker">đơn vị đã làm</div>
              <div class="muted">đơn vị đã làm</div>
            </div>
            <div class="subject-mini-grid">${moduleTags}</div>
            <div class="card-meta">${moduleTags}</div>
          </div>
        </div>
      </button>
    `;
  }).join("");

  const placeholders = upcoming.map((item) => `
  const upcomingCards = placeholders.map((item) => `
    <article class="placeholder-card fade-up">
      <div>
        <strong>${item.title}</strong>
    </article>
  `).join("");

  appRoot.innerHTML = `
    <section class="home-grid">
  app.innerHTML = `
    <section class="home-view">
      <section class="hero-panel fade-up">
        <div class="hero-copy">
          <p class="eyebrow">Bảng điều khiển ôn tập</p>
          <h1>Study Dashboard theo từng môn, sẵn để scale tiếp</h1>
          <p>Hiện tại mình dựng hoàn chỉnh môn Lịch sử với hai chế độ làm bài riêng. Khi có Địa lí hoặc môn khác, chỉ cần thêm dữ liệu vào file script.js là cùng chạy trên đúng khung giao diện này.</p>
          <p class="eyebrow">Dashboard ôn tập</p>
          <h1>Ôn theo từng môn, gọn hơn để thêm bài sau này</h1>
          <p>Hiện tại mình tách sẵn cấu trúc theo môn học và dựng hoàn chỉnh riêng phần Lịch sử. Khi có Địa lí hoặc môn khác, chỉ cần thêm dữ liệu là chạy tiếp trên đúng giao diện này.</p>
          <div class="hero-meta-row">
            <span class="chip">${totalSubjects} môn hoạt động</span>
            <span class="chip">${totalModules} module học</span>
            <span class="chip">${curriculum.length} môn hoạt động</span>
            <span class="chip">${summaries[0].subject.modules.length} module trong Lịch sử</span>
            <span class="chip">${totalUnits} đơn vị luyện tập</span>
          </div>
        </div>

        <div class="hero-metrics">
          <article class="hero-metric-card">
            <span class="meta-kicker">Tiến độ toàn app</span>
            <strong>${homeCompletion}%</strong>
          <article class="hero-metric">
            <span class="muted">Tiến độ toàn app</span>
            <strong>${completion}%</strong>
            <p>${answeredUnits}/${totalUnits} đơn vị đã được làm trên thiết bị này.</p>
          </article>
          <article class="hero-metric-card">
            <span class="meta-kicker">Cấu trúc hiện tại</span>
            <strong>Home -> Môn -> Dạng bài</strong>
            <p>Flow đã tách module độc lập để sau này chỉ việc cắm thêm dữ liệu.</p>
          <article class="hero-metric">
            <span class="muted">Cấu trúc hiện tại</span>
            <strong>Theo từng môn</strong>
            <p>Home -> Môn học -> Dạng bài. Sẵn để gắn thêm môn khác mà không phải sửa flow.</p>
          </article>
          <article class="hero-metric-card">
            <span class="meta-kicker">Trạng thái</span>
            <strong>Sẵn cho GitHub Pages</strong>
            <p>Không cần backend, lưu tiến độ local và chấm điểm trực tiếp trên trình duyệt.</p>
          <article class="hero-metric">
            <span class="muted">Triển khai</span>
            <strong>GitHub Pages</strong>
            <p>Chạy hoàn toàn bằng HTML, CSS và JavaScript thuần, không cần backend.</p>
          </article>
        </div>
      </section>

      <section class="subject-grid">
        ${cards}
        ${activeCards}
      </section>

      <section class="coming-grid">
        ${placeholders}
        ${upcomingCards}
      </section>
    </section>
  `;

function renderModuleTabs(subject, activeModule) {
  return subject.modules.map((module) => {
    const bucket = getProgressBucket(subject.id, module.id);
    const bucket = getBucket(subject.id, module.id);
    const stats = getModuleStats(module, bucket.answers);
    const completion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);
    const completion = percentage(stats.answeredUnits, stats.totalUnits);

    return `
      <button
        data-module-id="${module.id}"
      >
        <div class="module-tab-top">
          <strong>${module.label}</strong>
          <strong>${module.partLabel}</strong>
          <span class="soft-pill">${module.shortLabel}</span>
        </div>
        <span>${module.description}</span>
        <div class="module-progress"><span style="width: ${completion}%"></span></div>
        <div class="module-tab-top">
        <div class="module-tab-foot">
          <span>${stats.answeredUnits}/${stats.totalUnits} đã làm</span>
          <span>${completion}%</span>
        </div>
  return stats.history.map((item, index) => {
    const classes = ["history-chip"];

    if (state.currentIndex === index) {
    if (state.questionIndex === index) {
      classes.push("current");
    }

  }).join("");
}

function renderScoreCard(stats, module) {
function renderProgressPanel(stats, module) {
  const completion = percentage(stats.answeredUnits, stats.totalUnits);
  const angle = (completion / 100) * 360;

  return `
    <div class="progress-card">
      <div class="progress-ring" style="--progress-angle: ${angle}deg;">
        <div class="progress-copy">
          <strong>${completion}%</strong>
          <p>${module.type === "mcq" ? "câu đã chọn" : "ý đã đánh dấu"}</p>
        </div>
      </div>
      <div class="ring-track"><span style="width: ${completion}%"></span></div>
      <div class="meta-grid">
        <div class="meta-row">
          <span>Module hiện tại</span>
          <strong>${module.label}</strong>
        </div>
        <div class="meta-row">
          <span>Hoàn thành</span>
          <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
        </div>
        <div class="meta-row">
          <span>Lưu cục bộ</span>
          <strong>Tự động</strong>
        </div>
      </div>
    </div>
  `;
}

function renderResultPanel(stats, module) {
  if (state.reviewMode === "submit") {
    const tone = getPerformanceLabel(stats.score);
    const performance = getPerformance(stats.score);

    return `
      <div class="score-card">
        <div class="score-row">
          <div class="score-badge">${stats.score.toFixed(1)}</div>
          <div class="score-copy">
            <strong>${tone.title}</strong>
            <p>${tone.copy}</p>
            <strong>${performance.title}</strong>
            <p>${performance.text}</p>
          </div>
        </div>
        <div class="score-grid">
  if (state.reviewMode === "show") {
    return `
      <div class="empty-box">
        <p class="muted-line">Bạn đang ở chế độ xem đáp án nhanh cho phần <strong>${module.label}</strong>.</p>
        <p class="muted">Bạn đang ở chế độ xem đáp án nhanh cho phần <strong>${module.label}</strong>.</p>
      </div>
    `;
  }

  return `
    <div class="empty-box">
      <p class="muted-line">Bấm <strong>Nộp bài</strong> để chấm điểm, hoặc <strong>Xem đáp án</strong> để rà nhanh toàn bộ lựa chọn.</p>
    </div>
  `;
}

function renderProgressCard(stats, module) {
  const completion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);
  const angle = (completion / 100) * 360;

  return `
    <div class="progress-card">
      <div class="progress-ring" style="--progress-angle: ${angle}deg;">
        <div class="progress-copy">
          <strong>${completion}%</strong>
          <p>${module.type === "mcq" ? "câu đã chọn" : "ý đã đánh dấu"}</p>
        </div>
      </div>
      <div class="progress-track"><span style="width: ${completion}%"></span></div>
      <div class="meta-grid">
        <div class="meta-row">
          <span>Module hiện tại</span>
          <strong>${module.label}</strong>
        </div>
        <div class="meta-row">
          <span>Hoàn thành</span>
          <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
        </div>
        <div class="meta-row">
          <span>Lưu cục bộ</span>
          <strong>Tự động</strong>
        </div>
      </div>
      <p class="muted">Bấm <strong>Nộp bài</strong> để chấm điểm, hoặc <strong>Xem đáp án</strong> để rà nhanh toàn bộ.</p>
    </div>
  `;
}

function renderMcqQuestion(module, answers) {
  const question = module.questions[state.currentIndex];
  const question = module.questions[state.questionIndex];
  const selected = answers[String(question.id)] || null;
  const selectedState = selected ? `Đã chọn ${selected}` : "Chưa chọn";

  const options = Object.entries(question.options).map(([key, text]) => {
    const classes = ["option-button"];
    let marker = selected === key ? "Đang chọn" : "";
    let helper = selected === key ? "Đang chọn" : "";

    if (selected === key) {
      classes.push("selected");
    if (state.reviewMode === "submit" || state.reviewMode === "show") {
      if (question.correct === key) {
        classes.push("correct");
        marker = "Đáp án";
        helper = "Đáp án";
      } else if (selected === key && selected !== question.correct) {
        classes.push("incorrect");
        marker = "Bạn chọn";
        helper = "Bạn chọn";
      } else {
        marker = "";
        helper = "";
      }
    }

            <strong>Đáp án ${key}</strong>
            <span>${text}</span>
          </span>
          <span class="option-marker">${marker}</span>
          <span class="option-helper">${helper}</span>
        </span>
      </button>
    `;
        <div>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-state-chip">${selectedState}</span>
            <span class="question-state-chip">Phím tắt 1-4</span>
          </div>
          <div class="question-headline">
            <h3 class="question-title">${question.prompt}</h3>
            <span class="question-chip">${selectedState}</span>
            <span class="question-chip">Phím 1 2 3 4</span>
          </div>
          <p class="question-subcopy">Chọn một đáp án đúng. Dùng phím mũi tên trái phải để đổi câu nhanh.</p>
          <h3 class="question-title">${question.prompt}</h3>
          <p class="question-subcopy">Chọn một đáp án đúng. Bạn có thể dùng phím mũi tên trái phải để đổi câu nhanh.</p>
        </div>
        <div class="question-counter-card">
          <strong>${String(state.currentIndex + 1).padStart(2, "0")}</strong>
          <strong>${String(state.questionIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
      </div>
  `;
}

function getTruthLabel(value) {
  return value ? "Đúng" : "Sai";
}

function renderTfQuestion(module, answers) {
  const question = module.questions[state.currentIndex];
  const question = module.questions[state.questionIndex];

  const statements = question.statements.map((statement) => {
    const key = `${question.id}:${statement.key}`;
    const value = answers[key];
    const selectedLabel = typeof value === "boolean" ? getSelectedLabel(value) : "Chưa chọn";
    const correctLabel = getSelectedLabel(statement.correct);
    const isAnswered = typeof value === "boolean";
    const isCorrect = value === statement.correct;
    const storageKey = `${question.id}:${statement.key}`;
    const selected = answers[storageKey];
    const selectedLabel = typeof selected === "boolean" ? getTruthLabel(selected) : "Chưa chọn";
    const correctLabel = getTruthLabel(statement.correct);
    const isAnswered = typeof selected === "boolean";
    const isCorrect = selected === statement.correct;

    const rowClasses = ["statement-row"];
    if (state.reviewMode === "submit") {
    const trueClasses = ["toggle-button"];
    const falseClasses = ["toggle-button"];

    if (value === true) {
    if (selected === true) {
      trueClasses.push("selected");
    }

    if (value === false) {
    if (selected === false) {
      falseClasses.push("selected");
    }

    if (state.reviewMode === "submit" || state.reviewMode === "show") {
      if (statement.correct) {
        trueClasses.push("correct");
        if (value === false) {
        if (selected === false) {
          falseClasses.push("incorrect");
        }
      } else {
        falseClasses.push("correct");
        if (value === true) {
        if (selected === true) {
          trueClasses.push("incorrect");
        }
      }
        <div>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-state-chip">${question.statements.length} nhận định</span>
            <span class="question-state-chip">Đánh dấu từng ý</span>
          </div>
          <div class="question-headline">
            <h3 class="question-title">${question.title}</h3>
            <span class="question-chip">${question.statements.length} nhận định</span>
            <span class="question-chip">Chọn đúng / sai từng ý</span>
          </div>
          <h3 class="question-title">${question.title}</h3>
          <p class="question-subcopy">${question.prompt}</p>
        </div>
        <div class="question-counter-card">
          <strong>${String(state.currentIndex + 1).padStart(2, "0")}</strong>
          <strong>${String(state.questionIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
      </div>
function renderSubjectView() {
  const subject = getSubject(state.subjectId);
  const module = getModule(subject, state.moduleId);
  const bucket = getProgressBucket(subject.id, module.id);
  const bucket = getBucket(subject.id, module.id);
  const answers = bucket.answers;
  const stats = getModuleStats(module, answers);
  const subjectStats = getSubjectStats(subject);
  const moduleCompletion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);
  const heroAngle = (moduleCompletion / 100) * 360;
  const completion = percentage(stats.answeredUnits, stats.totalUnits);
  const heroAngle = (completion / 100) * 360;

  state.currentIndex = Math.max(0, Math.min(bucket.currentIndex || 0, module.questions.length - 1));
  state.questionIndex = Math.max(0, Math.min(bucket.questionIndex || 0, module.questions.length - 1));

  appRoot.innerHTML = `
  app.innerHTML = `
    <section class="subject-view">
      <section class="subject-hero history-theme fade-up">
      <section class="subject-hero fade-up">
        <div class="subject-hero-top">
          <button class="back-link" data-action="go-home">← Trang chủ</button>
          <span class="soft-pill">${subject.shortTitle}</span>
        </div>

        <div class="subject-hero-grid">
          <div class="subject-copy">
            <p class="eyebrow">Môn học đang hoạt động</p>
            <p class="eyebrow">Môn học đang mở</p>
            <h2>${subject.title}</h2>
            <p class="muted-line">${subject.tagline}</p>
            <p class="muted">${subject.tagline}</p>

            <div class="hero-stat-grid">
              <article class="hero-stat-card">
                <span class="meta-kicker">Tổng tiến độ môn</span>
                <span class="muted">Tổng tiến độ môn</span>
                <strong>${subjectStats.completion}%</strong>
              </article>
              <article class="hero-stat-card">
                <span class="meta-kicker">Đã làm</span>
                <span class="muted">Đã làm</span>
                <strong>${subjectStats.answeredUnits}/${subjectStats.totalUnits}</strong>
              </article>
              <article class="hero-stat-card">
                <span class="meta-kicker">Module hiện tại</span>
                <span class="muted">Phần hiện tại</span>
                <strong>${module.shortLabel}</strong>
              </article>
            </div>
          </div>

          <div class="hero-focus-card">
            <div class="hero-focus-head">
              <span class="meta-pill">Live module</span>
              <strong>${module.label}</strong>
              <span class="muted-line">${module.description}</span>
              <span class="soft-pill">Module đang học</span>
              <strong>${module.partLabel}</strong>
              <span>${module.description}</span>
            </div>

            <div class="hero-focus-foot">
              <div class="hero-focus-ring" style="--module-progress-angle: ${heroAngle}deg;">
                <strong>${moduleCompletion}%</strong>
              <div class="hero-ring" style="--hero-angle: ${heroAngle}deg;">
                <strong>${completion}%</strong>
              </div>
              <div class="hero-focus-meta">
                <div class="meta-row">
                  <span>Đã làm</span>
                  <span>Hoàn thành</span>
                  <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
                </div>
                <div class="meta-row">
                  <span>Review mode</span>
                  <strong>${state.reviewMode === "submit" ? "Chấm điểm" : state.reviewMode === "show" ? "Đáp án" : "Làm bài"}</strong>
                  <span>Trạng thái</span>
                  <strong>${state.reviewMode === "submit" ? "Đã chấm" : state.reviewMode === "show" ? "Đáp án" : "Đang làm"}</strong>
                </div>
              </div>
            </div>
            <div class="hero-focus-track"><span style="width: ${moduleCompletion}%"></span></div>

            <div class="hero-focus-track"><span style="width: ${completion}%"></span></div>
          </div>
        </div>

        <div class="module-strip">
          ${renderModuleTabs(subject, module)}
        </div>
          <div class="workspace-banner">
            <div>
              <strong>Workspace luyện tập</strong>
              <div class="meta-kicker">Lưu tự động trên trình duyệt. Bạn có thể làm theo từng phần riêng rồi quay lại sau.</div>
              <div class="muted">Tự lưu tiến độ trên trình duyệt. Có thể làm từng phần rồi quay lại sau.</div>
            </div>
            <div class="banner-shortcuts">
              <span class="shortcut-key">← / → đổi câu</span>
              <span class="shortcut-key">Enter chấm nhanh</span>
              ${module.type === "mcq" ? '<span class="shortcut-key">1 2 3 4 chọn đáp án</span>' : ""}
            <div class="shortcut-row">
              <span class="shortcut">← / → đổi câu</span>
              <span class="shortcut">Enter chấm nhanh</span>
              ${module.type === "mcq" ? '<span class="shortcut">1 2 3 4 chọn đáp án</span>' : ""}
            </div>
          </div>

          <div class="workspace-head">
            <div>
              <div class="page-tag">${module.label}</div>
              <div class="page-tag">${module.partLabel}</div>
              <h3 class="page-title">${module.description}</h3>
            </div>
            <div class="counter">

          <div class="question-footer">
            <div class="action-group">
              <button class="nav-button" data-action="prev-question" ${state.currentIndex === 0 ? "disabled" : ""}>Câu trước</button>
              <button class="nav-button" data-action="next-question" ${state.currentIndex === module.questions.length - 1 ? "disabled" : ""}>Câu sau</button>
              <button class="nav-button" data-action="prev-question" ${state.questionIndex === 0 ? "disabled" : ""}>Câu trước</button>
              <button class="nav-button" data-action="next-question" ${state.questionIndex === module.questions.length - 1 ? "disabled" : ""}>Câu sau</button>
            </div>
            <div class="action-group">
              <button class="primary-button" data-action="submit-module">Nộp bài</button>
              </div>
              <span class="soft-pill">${module.shortLabel}</span>
            </div>
            ${renderProgressCard(stats, module)}
            ${renderProgressPanel(stats, module)}
          </section>

          <section class="panel fade-up">
              </div>
              <span class="soft-pill">${state.reviewMode === "idle" ? "Live" : "Review"}</span>
            </div>
            ${renderScoreCard(stats, module)}
            ${renderResultPanel(stats, module)}
          </section>

          <section class="panel fade-up">
            <div class="legend-row">
              <span class="chip">Xanh: đã làm</span>
              <span class="chip">Đỏ: sai</span>
              <span class="chip">Vàng: xem đáp án</span>
              <span class="chip">Vàng: đáp án</span>
            </div>
            <p class="history-caption">Chip hiện tại được viền sáng để bạn biết đang đứng ở câu nào.</p>
            <p class="history-caption">Ô đang sáng là câu bạn đang đứng hiện tại.</p>
          </section>
        </aside>
      </section>
  renderSubjectView();
}

function handleAppClick(event) {
function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  if (action === "jump-question") {
    setCurrentIndex(Number(button.dataset.questionIndex));
    moveToQuestion(Number(button.dataset.questionIndex));
    return;
  }

  if (action === "prev-question") {
    setCurrentIndex(state.currentIndex - 1);
    moveToQuestion(state.questionIndex - 1);
    return;
  }

  if (action === "next-question") {
    setCurrentIndex(state.currentIndex + 1);
    moveToQuestion(state.questionIndex + 1);
    return;
  }

  }

  if (action === "reset-module") {
    resetCurrentModule();
    resetModuleProgress();
  }
}

function handleGlobalKeydown(event) {
function handleKeyboard(event) {
  if (state.view !== "subject") {
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setCurrentIndex(state.currentIndex + 1);
    moveToQuestion(state.questionIndex + 1);
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setCurrentIndex(state.currentIndex - 1);
    moveToQuestion(state.questionIndex - 1);
    return;
  }

  }

  if (module.type === "mcq") {
    const keyMap = {
    const map = {
      1: "A",
      2: "B",
      3: "C",
      4: "D"
    };

    const picked = keyMap[event.key];
    const picked = map[event.key];
    if (picked) {
      event.preventDefault();
      const question = module.questions[state.currentIndex];
      const question = module.questions[state.questionIndex];
      setMcqAnswer(question.id, picked);
    }
  }
}

appRoot.addEventListener("click", handleAppClick);
window.addEventListener("keydown", handleGlobalKeydown);
app.addEventListener("click", handleClick);
window.addEventListener("keydown", handleKeyboard);
renderApp();
