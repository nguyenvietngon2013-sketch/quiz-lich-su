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
    const stats = getModuleStats(module, bucket.answers);

    totalUnits += stats.totalUnits;
    answeredUnits += stats.answeredUnits;
    correctUnits += stats.correctUnits;

    return {
      id: module.id,
      stats
    };
  });

  return {
    totalUnits,
    answeredUnits,
    correctUnits,
    modules,
    completion: getCompletionPercent(answeredUnits, totalUnits)
  };
}

function renderHomeView() {
  const cards = curriculum.map((subject) => {
    const moduleChips = subject.modules
      .map((module) => `<span class="chip">${module.shortLabel}</span>`)
  const upcoming = [
    { title: "Địa lí", note: "Sẽ gắn vào cùng hệ thống khi có bộ câu hỏi." },
    { title: "Sinh học", note: "Có thể thêm cả trắc nghiệm và đúng sai." },
    { title: "Vật lí", note: "Giữ nguyên flow hiện tại, chỉ thay dữ liệu." }
  ];

  const summaries = curriculum.map((subject) => ({
    subject,
    stats: getSubjectStats(subject)
  }));

  const totalSubjects = summaries.length;
  const totalModules = summaries.reduce((sum, item) => sum + item.subject.modules.length, 0);
  const totalUnits = summaries.reduce((sum, item) => sum + item.stats.totalUnits, 0);
  const answeredUnits = summaries.reduce((sum, item) => sum + item.stats.answeredUnits, 0);
  const homeCompletion = getCompletionPercent(answeredUnits, totalUnits);

  const cards = summaries.map(({ subject, stats }) => {
    const moduleTags = subject.modules
      .map((module) => `<span class="module-mini-tag">${module.shortLabel}</span>`)
      .join("");

    return `
      <button class="subject-card ${subject.colorClass}" data-action="open-subject" data-subject-id="${subject.id}">
        <span class="subject-icon">${subject.icon}</span>
      <button class="subject-card ${subject.colorClass} fade-up" data-action="open-subject" data-subject-id="${subject.id}">
        <div class="subject-card-top">
          <span class="subject-icon">${subject.icon}</span>
          <span class="tag-pill">${stats.completion}% hoàn thành</span>
        </div>
        <h2>${subject.title}</h2>
        <div class="card-copy">
          <p>${subject.tagline}</p>
        </div>
        <div class="card-meta">${moduleChips}</div>
        <div class="subject-progress">
          <div class="progress-bar"><span style="width: ${stats.completion}%"></span></div>
          <div class="subject-card-foot">
            <div>
              <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
              <div class="meta-kicker">đơn vị đã làm</div>
            </div>
            <div class="subject-mini-grid">${moduleTags}</div>
          </div>
        </div>
      </button>
    `;
  }).join("");

  const placeholders = upcoming.map((item) => `
    <article class="placeholder-card fade-up">
      <div>
        <strong>${item.title}</strong>
        <p class="empty-note">${item.note}</p>
      </div>
    </article>
  `).join("");

  appRoot.innerHTML = `
    <section class="home-grid">
      <section class="hero-panel">
        <h1>Ôn Tập Bài Học</h1>
        <p>Chọn môn học để bắt đầu. Cấu trúc này đã tách sẵn theo từng môn, hiện mới có môn Lịch sử nên mình dựng hoàn chỉnh phần đó trước.</p>
      <section class="hero-panel fade-up">
        <div class="hero-copy">
          <p class="eyebrow">Bảng điều khiển ôn tập</p>
          <h1>Study Dashboard theo từng môn, sẵn để scale tiếp</h1>
          <p>Hiện tại mình dựng hoàn chỉnh môn Lịch sử với hai chế độ làm bài riêng. Khi có Địa lí hoặc môn khác, chỉ cần thêm dữ liệu vào file script.js là cùng chạy trên đúng khung giao diện này.</p>
          <div class="hero-meta-row">
            <span class="chip">${totalSubjects} môn hoạt động</span>
            <span class="chip">${totalModules} module học</span>
            <span class="chip">${totalUnits} đơn vị luyện tập</span>
          </div>
        </div>
        <div class="hero-metrics">
          <article class="hero-metric-card">
            <span class="meta-kicker">Tiến độ toàn app</span>
            <strong>${homeCompletion}%</strong>
            <p>${answeredUnits}/${totalUnits} đơn vị đã được làm trên thiết bị này.</p>
          </article>
          <article class="hero-metric-card">
            <span class="meta-kicker">Cấu trúc hiện tại</span>
            <strong>Home -> Môn -> Dạng bài</strong>
            <p>Flow đã tách module độc lập để sau này chỉ việc cắm thêm dữ liệu.</p>
          </article>
          <article class="hero-metric-card">
            <span class="meta-kicker">Trạng thái</span>
            <strong>Sẵn cho GitHub Pages</strong>
            <p>Không cần backend, lưu tiến độ local và chấm điểm trực tiếp trên trình duyệt.</p>
          </article>
        </div>
      </section>

      <section class="subject-grid">
        ${cards}
        <article class="placeholder-card">
          <div>
            <strong>Các môn khác</strong>
            <p class="empty-note">Khi có Địa lí hoặc môn khác, chỉ cần thêm dữ liệu vào cùng khung này.</p>
          </div>
        </article>
      </section>

      <section class="coming-grid">
        ${placeholders}
      </section>
    </section>
  `;
}

function renderModuleTabs(subject, activeModule) {
  return subject.modules.map((module) => `
    <button
      class="module-tab module-${module.id} ${module.id === activeModule.id ? "active" : ""}"
      data-action="switch-module"
      data-module-id="${module.id}"
    >
      <strong>${module.label}</strong>
      <span>${module.description}</span>
    </button>
  `).join("");
  return subject.modules.map((module) => {
    const bucket = getProgressBucket(subject.id, module.id);
    const stats = getModuleStats(module, bucket.answers);
    const completion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);

    return `
      <button
        class="module-tab module-${module.id} ${module.id === activeModule.id ? "active" : ""}"
        data-action="switch-module"
        data-module-id="${module.id}"
      >
        <div class="module-tab-top">
          <strong>${module.label}</strong>
          <span class="soft-pill">${module.shortLabel}</span>
        </div>
        <span>${module.description}</span>
        <div class="module-progress"><span style="width: ${completion}%"></span></div>
        <div class="module-tab-top">
          <span>${stats.answeredUnits}/${stats.totalUnits} đã làm</span>
          <span>${completion}%</span>
        </div>
      </button>
    `;
  }).join("");
}

function renderHistoryChips(module, stats) {
        class="${classes.join(" ")}"
        data-action="jump-question"
        data-question-index="${index}"
        title="Câu ${item.id}"
      >
        ${String(item.id).padStart(2, "0")}
      </button>

function renderScoreCard(stats, module) {
  if (state.reviewMode === "submit") {
    const tone = getPerformanceLabel(stats.score);

    return `
      <div class="score-card">
        <div class="score-row">
          <div class="score-badge">${stats.score.toFixed(1)}</div>
          <div class="score-copy">
            <strong>${module.label}</strong>
            <p>Bạn đúng ${stats.correctUnits}/${stats.totalUnits} đơn vị chấm điểm.</p>
            <strong>${tone.title}</strong>
            <p>${tone.copy}</p>
          </div>
        </div>
        <div class="meta-grid">
        <div class="score-grid">
          <div class="meta-row">
            <span>Đã làm</span>
            <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
            <span>Phần đang chấm</span>
            <strong>${module.label}</strong>
          </div>
          <div class="meta-row">
            <span>Đúng</span>
            <strong>${stats.correctUnits}</strong>
            <strong>${stats.correctUnits}/${stats.totalUnits}</strong>
          </div>
          <div class="meta-row">
            <span>Còn lại</span>
            <span>Đã làm</span>
            <strong>${stats.answeredUnits}</strong>
          </div>
          <div class="meta-row">
            <span>Bỏ trống</span>
            <strong>${stats.totalUnits - stats.answeredUnits}</strong>
          </div>
        </div>
  if (state.reviewMode === "show") {
    return `
      <div class="empty-box">
        <p class="muted-line">Bạn đang ở chế độ xem đáp án của phần <strong>${module.label}</strong>.</p>
        <p class="muted-line">Bạn đang ở chế độ xem đáp án nhanh cho phần <strong>${module.label}</strong>.</p>
      </div>
    `;
  }

  return `
    <div class="empty-box">
      <p class="muted-line">Nộp bài để hiện điểm số. Bạn cũng có thể bấm <strong>Xem đáp án</strong> để kiểm tra nhanh.</p>
      <p class="muted-line">Bấm <strong>Nộp bài</strong> để chấm điểm, hoặc <strong>Xem đáp án</strong> để rà nhanh toàn bộ lựa chọn.</p>
    </div>
  `;
}

function renderProgressCard(stats, module) {
  const angle = stats.totalUnits === 0 ? 0 : (stats.answeredUnits / stats.totalUnits) * 360;
  document.documentElement.style.setProperty("--progress-angle", `${angle}deg`);
  const completion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);
  const angle = (completion / 100) * 360;

  return `
    <div class="progress-card">
      <div class="progress-ring">
      <div class="progress-ring" style="--progress-angle: ${angle}deg;">
        <div class="progress-copy">
          <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
          <p>${module.type === "mcq" ? "câu đã chọn" : "ý đã chọn"}</p>
          <strong>${completion}%</strong>
          <p>${module.type === "mcq" ? "câu đã chọn" : "ý đã đánh dấu"}</p>
        </div>
      </div>
      <div class="progress-track"><span style="width: ${completion}%"></span></div>
      <div class="meta-grid">
        <div class="meta-row">
          <span>Đang làm</span>
          <span>Module hiện tại</span>
          <strong>${module.label}</strong>
        </div>
        <div class="meta-row">
          <span>Đã hoàn thành</span>
          <strong>${stats.answeredUnits}</strong>
          <span>Hoàn thành</span>
          <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
        </div>
        <div class="meta-row">
          <span>Còn lại</span>
          <strong>${stats.totalUnits - stats.answeredUnits}</strong>
          <span>Lưu cục bộ</span>
          <strong>Tự động</strong>
        </div>
      </div>
    </div>
function renderMcqQuestion(module, answers) {
  const question = module.questions[state.currentIndex];
  const selected = answers[String(question.id)] || null;
  const selectedState = selected ? `Đã chọn ${selected}` : "Chưa chọn";

  const options = Object.entries(question.options).map(([key, text]) => {
    const classes = ["option-button"];
    let marker = selected === key ? "Đang chọn" : "";

    if (selected === key) {
      classes.push("selected");
    if (state.reviewMode === "submit" || state.reviewMode === "show") {
      if (question.correct === key) {
        classes.push("correct");
        marker = "Đáp án";
      } else if (selected === key && selected !== question.correct) {
        classes.push("incorrect");
        marker = "Bạn chọn";
      } else {
        marker = "";
      }
    }

      >
        <span class="option-line">
          <span class="option-key">${key}</span>
          <span>${text}</span>
          <span class="option-copy">
            <strong>Đáp án ${key}</strong>
            <span>${text}</span>
          </span>
          <span class="option-marker">${marker}</span>
        </span>
      </button>
    `;
  }

  return `
    <article class="question-shell">
      <div class="question-head">
    <article class="question-shell fade-up">
      <div class="question-shell-top">
        <div>
          <div class="question-index">Câu ${question.id}</div>
          <h3 class="question-title">${question.prompt}</h3>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-state-chip">${selectedState}</span>
            <span class="question-state-chip">Phím tắt 1-4</span>
          </div>
          <div class="question-headline">
            <h3 class="question-title">${question.prompt}</h3>
          </div>
          <p class="question-subcopy">Chọn một đáp án đúng. Dùng phím mũi tên trái phải để đổi câu nhanh.</p>
        </div>
        <div class="question-counter-card">
          <strong>${String(state.currentIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
        <div class="counter">${state.currentIndex + 1}/${module.questions.length}</div>
      </div>
      <div class="option-list">${options}</div>
      ${note}
  const statements = question.statements.map((statement) => {
    const key = `${question.id}:${statement.key}`;
    const value = answers[key];
    const selectedLabel = typeof value === "boolean" ? getSelectedLabel(value) : "Chưa chọn";
    const correctLabel = getSelectedLabel(statement.correct);
    const isAnswered = typeof value === "boolean";
    const isCorrect = value === statement.correct;
      } else if (isCorrect) {
        note = `<p class="review-note"><strong>Chính xác.</strong> ${statement.explanation}</p>`;
      } else {
        note = `<p class="review-note"><strong>Bạn chọn ${getSelectedLabel(value)}.</strong> Đáp án đúng là ${correctLabel}. ${statement.explanation}</p>`;
        note = `<p class="review-note"><strong>Bạn chọn ${selectedLabel}.</strong> Đáp án đúng là ${correctLabel}. ${statement.explanation}</p>`;
      }
    } else if (state.reviewMode === "show") {
      note = `<p class="review-note"><strong>Đáp án đúng là ${correctLabel}.</strong> ${statement.explanation}</p>`;
    return `
      <article class="${rowClasses.join(" ")}">
        <div class="statement-main">
          <div class="statement-line">
            <span class="statement-key">${statement.key}</span>
            <p class="statement-text">${statement.text}</p>
          <div class="statement-head">
            <div class="statement-line">
              <span class="statement-key">${statement.key}</span>
              <p class="statement-text">${statement.text}</p>
            </div>
            <span class="statement-status">${selectedLabel}</span>
          </div>
          <div class="statement-actions">
            <div class="statement-toggle">
              <button
                class="${trueClasses.join(" ")}"
                data-action="pick-tf"
                data-question-id="${question.id}"
                data-statement-key="${statement.key}"
                data-value="true"
              >
                Đúng
              </button>
              <button
                class="${falseClasses.join(" ")}"
                data-action="pick-tf"
                data-question-id="${question.id}"
                data-statement-key="${statement.key}"
                data-value="false"
              >
                Sai
              </button>
            </div>
          <div class="statement-toggle">
            <button
              class="${trueClasses.join(" ")}"
              data-action="pick-tf"
              data-question-id="${question.id}"
              data-statement-key="${statement.key}"
              data-value="true"
            >
              Đúng
            </button>
            <button
              class="${falseClasses.join(" ")}"
              data-action="pick-tf"
              data-question-id="${question.id}"
              data-statement-key="${statement.key}"
              data-value="false"
            >
              Sai
            </button>
          </div>
          ${note}
        </div>
  }).join("");

  return `
    <article class="question-shell">
      <div class="question-head">
    <article class="question-shell fade-up">
      <div class="question-shell-top">
        <div>
          <div class="question-index">Câu ${question.id}</div>
          <h3 class="question-title">${question.title}</h3>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-state-chip">${question.statements.length} nhận định</span>
            <span class="question-state-chip">Đánh dấu từng ý</span>
          </div>
          <div class="question-headline">
            <h3 class="question-title">${question.title}</h3>
          </div>
          <p class="question-subcopy">${question.prompt}</p>
        </div>
        <div class="counter">${state.currentIndex + 1}/${module.questions.length}</div>
        <div class="question-counter-card">
          <strong>${String(state.currentIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
      </div>
      <p class="question-copy">${question.prompt}</p>
      <div class="statement-list">${statements}</div>
    </article>
  `;
  const bucket = getProgressBucket(subject.id, module.id);
  const answers = bucket.answers;
  const stats = getModuleStats(module, answers);
  const subjectStats = getSubjectStats(subject);
  const moduleCompletion = getCompletionPercent(stats.answeredUnits, stats.totalUnits);
  const heroAngle = (moduleCompletion / 100) * 360;

  state.currentIndex = Math.max(0, Math.min(bucket.currentIndex || 0, module.questions.length - 1));

  appRoot.innerHTML = `
    <section class="subject-view">
      <section class="subject-hero">
        <div class="hero-topline">
      <section class="subject-hero history-theme fade-up">
        <div class="subject-hero-top">
          <button class="back-link" data-action="go-home">← Trang chủ</button>
          <span class="soft-pill">${subject.shortTitle}</span>
        </div>
        <div class="subject-copy">
          <h2>${subject.title}</h2>
          <p class="muted-line">${subject.tagline}</p>
        <div class="subject-hero-grid">
          <div class="subject-copy">
            <p class="eyebrow">Môn học đang hoạt động</p>
            <h2>${subject.title}</h2>
            <p class="muted-line">${subject.tagline}</p>
            <div class="hero-stat-grid">
              <article class="hero-stat-card">
                <span class="meta-kicker">Tổng tiến độ môn</span>
                <strong>${subjectStats.completion}%</strong>
              </article>
              <article class="hero-stat-card">
                <span class="meta-kicker">Đã làm</span>
                <strong>${subjectStats.answeredUnits}/${subjectStats.totalUnits}</strong>
              </article>
              <article class="hero-stat-card">
                <span class="meta-kicker">Module hiện tại</span>
                <strong>${module.shortLabel}</strong>
              </article>
            </div>
          </div>
          <div class="hero-focus-card">
            <div class="hero-focus-head">
              <span class="meta-pill">Live module</span>
              <strong>${module.label}</strong>
              <span class="muted-line">${module.description}</span>
            </div>
            <div class="hero-focus-foot">
              <div class="hero-focus-ring" style="--module-progress-angle: ${heroAngle}deg;">
                <strong>${moduleCompletion}%</strong>
              </div>
              <div class="hero-focus-meta">
                <div class="meta-row">
                  <span>Đã làm</span>
                  <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
                </div>
                <div class="meta-row">
                  <span>Review mode</span>
                  <strong>${state.reviewMode === "submit" ? "Chấm điểm" : state.reviewMode === "show" ? "Đáp án" : "Làm bài"}</strong>
                </div>
              </div>
            </div>
            <div class="hero-focus-track"><span style="width: ${moduleCompletion}%"></span></div>
          </div>
        </div>
        <div class="module-strip">
          ${renderModuleTabs(subject, module)}
      </section>

      <section class="workspace-grid">
        <section class="workspace-main">
        <section class="workspace-main fade-up">
          <div class="workspace-banner">
            <div>
              <strong>Workspace luyện tập</strong>
              <div class="meta-kicker">Lưu tự động trên trình duyệt. Bạn có thể làm theo từng phần riêng rồi quay lại sau.</div>
            </div>
            <div class="banner-shortcuts">
              <span class="shortcut-key">← / → đổi câu</span>
              <span class="shortcut-key">Enter chấm nhanh</span>
              ${module.type === "mcq" ? '<span class="shortcut-key">1 2 3 4 chọn đáp án</span>' : ""}
            </div>
          </div>

          <div class="workspace-head">
            <div>
              <div class="page-tag">${module.label}</div>
              <h3 class="page-title">${module.description}</h3>
            </div>
            <div class="counter">Đúng: ${state.reviewMode === "idle" ? "0" : stats.correctUnits}/${stats.totalUnits}</div>
            <div class="counter">
              ${state.reviewMode === "idle" ? `${stats.answeredUnits}/${stats.totalUnits} đã làm` : `Đúng: ${stats.correctUnits}/${stats.totalUnits}`}
            </div>
          </div>

          ${renderQuestionArea(module, answers)}
        </section>

        <aside class="workspace-side">
          <section class="panel">
          <section class="panel fade-up">
            <div class="history-head">
              <strong>Tiến độ</strong>
              <div class="panel-title">
                <strong>Tiến độ</strong>
                <span>Theo module hiện tại</span>
              </div>
              <span class="soft-pill">${module.shortLabel}</span>
            </div>
            ${renderProgressCard(stats, module)}
          </section>

          <section class="panel">
          <section class="panel fade-up">
            <div class="history-head">
              <strong>Kết quả</strong>
              <span class="soft-pill">${state.reviewMode === "submit" ? "Đã chấm" : state.reviewMode === "show" ? "Đáp án" : "Chưa chấm"}</span>
              <div class="panel-title">
                <strong>Kết quả</strong>
                <span>${state.reviewMode === "submit" ? "Đã chấm điểm" : state.reviewMode === "show" ? "Đang xem đáp án" : "Chưa chấm"}</span>
              </div>
              <span class="soft-pill">${state.reviewMode === "idle" ? "Live" : "Review"}</span>
            </div>
            ${renderScoreCard(stats, module)}
          </section>

          <section class="panel">
          <section class="panel fade-up">
            <div class="history-head">
              <strong>Lịch sử câu hỏi</strong>
              <span class="soft-pill">${module.questions.length}</span>
              <div class="panel-title">
                <strong>Navigator</strong>
                <span>Nhảy nhanh tới từng câu</span>
              </div>
              <span class="soft-pill">${module.questions.length} câu</span>
            </div>
            <div class="history-list">${renderHistoryChips(module, stats)}</div>
            <p class="history-caption">Bạn có thể nhảy nhanh tới từng câu từ đây.</p>
            <div class="legend-row">
              <span class="chip">Xanh: đã làm</span>
              <span class="chip">Đỏ: sai</span>
              <span class="chip">Vàng: xem đáp án</span>
            </div>
            <p class="history-caption">Chip hiện tại được viền sáng để bạn biết đang đứng ở câu nào.</p>
          </section>
        </aside>
      </section>
  }
}

function handleGlobalKeydown(event) {
  if (state.view !== "subject") {
    return;
  }

  if (event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const subject = getSubject(state.subjectId);
  const module = getModule(subject, state.moduleId);
  if (!module) {
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setCurrentIndex(state.currentIndex + 1);
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setCurrentIndex(state.currentIndex - 1);
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    state.reviewMode = "submit";
    renderApp();
    return;
  }

  if (module.type === "mcq") {
    const keyMap = {
      1: "A",
      2: "B",
      3: "C",
      4: "D"
    };

    const picked = keyMap[event.key];
    if (picked) {
      event.preventDefault();
      const question = module.questions[state.currentIndex];
      setMcqAnswer(question.id, picked);
    }
  }
}

appRoot.addEventListener("click", handleAppClick);
window.addEventListener("keydown", handleGlobalKeydown);
renderApp();
