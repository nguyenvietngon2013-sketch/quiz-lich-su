const STORAGE_KEY = "study-hub-history-v6";
const STORAGE_KEY = "study-hub-history-v7";
const LETTERS = ["A", "B", "C", "D"];

const icons = {
  book: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15.5A1.5 1.5 0 0 0 18.5 18H6.5A2.5 2.5 0 0 0 4 20.5z"></path>
        <path d="M8 4v14"></path>
        <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"></path>
      </svg>
    </span>
  `,
  temple: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M3 10h18"></path>
        <path d="M5 10v8"></path>
        <path d="M9.5 10v8"></path>
        <path d="M14.5 10v8"></path>
        <path d="M19 10v8"></path>
        <path d="M3 18h18"></path>
        <path d="M2.5 10 12 4l9.5 6"></path>
      </svg>
    </span>
  `,
  check: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5"></circle>
        <path d="m8.5 12 2.3 2.4 4.9-5.2"></path>
      </svg>
    </span>
  `,
  globe: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5"></circle>
        <path d="M3.8 9.5h16.4"></path>
        <path d="M3.8 14.5h16.4"></path>
        <path d="M12 3.5c2.2 2.3 3.5 5.3 3.5 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.5-5.3-3.5-8.5S9.8 5.8 12 3.5z"></path>
      </svg>
    </span>
  `,
  spark: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 3.5v3"></path>
        <path d="M12 17.5v3"></path>
        <path d="m5.8 5.8 2.1 2.1"></path>
        <path d="m16.1 16.1 2.1 2.1"></path>
        <path d="M3.5 12h3"></path>
        <path d="M17.5 12h3"></path>
        <path d="m5.8 18.2 2.1-2.1"></path>
        <path d="m16.1 7.9 2.1-2.1"></path>
        <circle cx="12" cy="12" r="3.2"></circle>
      </svg>
    </span>
  `,
  bolt: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M13.5 2.5 5.8 13h5l-.3 8.5L18.2 11h-5z"></path>
      </svg>
    </span>
  `,
  flask: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M9 3.5h6"></path>
        <path d="M10.5 3.5v5.3L5.5 18a2.5 2.5 0 0 0 2.2 3.7h8.6a2.5 2.5 0 0 0 2.2-3.7l-5-9.2V3.5"></path>
        <path d="M8.3 15h7.4"></path>
      </svg>
    </span>
  `,
  file: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
        <path d="M14 3.5V8h4"></path>
        <path d="M9 12h6"></path>
        <path d="M9 16h6"></path>
      </svg>
    </span>
  `,
  grid: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M4 4h6v6H4z"></path>
        <path d="M14 4h6v6h-6z"></path>
        <path d="M4 14h6v6H4z"></path>
        <path d="M14 14h6v6h-6z"></path>
      </svg>
    </span>
  `,
  settings: `
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3.2"></circle>
        <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.8 1.8 0 1 1-2.5 2.5l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.8 1.8 0 1 1-3.6 0v-.1a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.8 1.8 0 1 1-2.5-2.5l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a1.8 1.8 0 1 1 0-3.6h.1a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a1.8 1.8 0 1 1 2.5-2.5l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a1.8 1.8 0 1 1 3.6 0v.1a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.8 1.8 0 1 1 2.5 2.5l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6h.1a1.8 1.8 0 1 1 0 3.6h-.1a1 1 0 0 0-.9.6z"></path>
      </svg>
    </span>
  `
};

const curriculum = [
  {
    id: "history",
    title: "Lịch sử",
    shortTitle: "Sử 7",
    icon: "LS",
    tagline: "Ba lần kháng chiến chống Mông - Nguyên, nhà Hồ và khởi nghĩa Lam Sơn.",
    heroTitle: "ÔN SỬ 6.5.26",
    heroSubtitle: "Chọn phần làm bài",
    tileTitle: "ÔN SỬ 6.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "LỊCH SỬ 7",
    color: "red",
    icon: "temple",
    active: true,
    modules: [
      {
        id: "mcq",
        partLabel: "A. Trắc nghiệm",
        label: "Trắc nghiệm",
        shortLabel: "20 TN",
        description: "20 câu chọn 1 đáp án đúng",
        label: "A. Trắc nghiệm",
        cardTitle: "A. Trắc nghiệm",
        cardSubtitle: "20 câu chọn 1 đáp án đúng",
        badge: "20 TN",
        color: "blue",
        icon: "file",
        quizTitle: "Trắc nghiệm Lịch sử",
        instructions: "Chọn một đáp án đúng cho từng câu hỏi.",
        type: "mcq",
        questions: [
          {
            id: 1,
            prompt: 'Kế sách "vườn không nhà trống" được áp dụng trong lần kháng chiến nào?',
            options: {
              A: "Chỉ sử dụng trong cuộc kháng chiến lần thứ nhất.",
              B: "Chỉ áp dụng trong cuộc kháng chiến lần thứ hai.",
              C: "Chỉ áp dụng trong cuộc kháng chiến lần thứ ba.",
              D: "Được áp dụng trong cả ba lần kháng chiến."
            },
            prompt: `Kế sách "vườn không nhà trống" được áp dụng trong lần kháng chiến nào?`,
            options: [
              "Chỉ sử dụng trong cuộc kháng chiến lần thứ nhất.",
              "Chỉ áp dụng trong cuộc kháng chiến lần thứ hai.",
              "Chỉ áp dụng trong cuộc kháng chiến lần thứ ba.",
              "Được áp dụng trong cả ba lần kháng chiến."
            ],
            correct: "D",
            explanation: 'Kế sách "vườn không nhà trống" được nhà Trần áp dụng trong cả ba lần kháng chiến để kéo dài thời gian và làm suy yếu quân địch.'
            explanation: "Nhà Trần sử dụng kế sách này trong cả ba lần kháng chiến để kéo dài thời gian và làm suy yếu quân địch."
          },
          {
            id: 2,
            prompt: "Trước cuộc kháng chiến lần thứ hai (năm 1285), Hưng Đạo Vương Trần Quốc Tuấn được cử làm .................. - Tổng chỉ huy các lực lượng kháng chiến.",
            options: {
              A: "Thượng tướng Thái sư",
              B: "Hưng Đạo Đại Vương",
              C: "Quốc công tiết chế",
              D: "Nguyên soái"
            },
            options: [
              "Thượng tướng Thái sư",
              "Hưng Đạo Đại Vương",
              "Quốc công tiết chế",
              "Nguyên soái"
            ],
            correct: "C",
            explanation: "Trần Quốc Tuấn được giao chức Quốc công tiết chế để chỉ huy toàn bộ lực lượng kháng chiến của nhà Trần."
          },
          {
            id: 3,
            prompt: "Tác phẩm nào được Trần Quốc Tuấn viết nhằm động viên tinh thần chiến đấu của quân đội nhà Trần trước cuộc kháng chiến năm 1285?",
            options: {
              A: "Binh thư yếu lược",
              B: "Vạn Kiếp tổng bí truyền thư",
              C: "Hịch tướng sĩ",
              D: "Nam dược thần hiệu"
            },
            options: [
              "Binh thư yếu lược",
              "Vạn Kiếp tổng bí truyền thư",
              "Hịch tướng sĩ",
              "Nam dược thần hiệu"
            ],
            correct: "C",
            explanation: '"Hịch tướng sĩ" là tác phẩm nổi tiếng dùng để khích lệ lòng yêu nước và tinh thần chiến đấu của quân sĩ.'
            explanation: `"Hịch tướng sĩ" được viết để khích lệ lòng yêu nước và tinh thần chiến đấu của quân sĩ nhà Trần.`
          },
          {
            id: 4,
            prompt: "Nhân tố quan trọng nhất để xây dựng khối đoàn kết giữa triều đình với nhân dân là gì?",
            options: {
              A: "Nhà Trần chăm lo sức dân, củng cố khối đại đoàn kết dân tộc, phát huy sức mạnh của toàn dân.",
              B: "Nhà Trần chủ động giải quyết những bất hoà trong nội bộ vương triều.",
              C: "Nhà Trần chuẩn bị chu đáo về mọi mặt cho cuộc kháng chiến.",
              D: "Quân và dân nhà Trần có tinh thần quyết chiến quyết thắng."
            },
            options: [
              "Nhà Trần chăm lo sức dân, củng cố khối đại đoàn kết dân tộc, phát huy sức mạnh của toàn dân.",
              "Nhà Trần chủ động giải quyết những bất hoà trong nội bộ vương triều.",
              "Nhà Trần chuẩn bị chu đáo về mọi mặt cho cuộc kháng chiến.",
              "Quân và dân nhà Trần có tinh thần quyết chiến quyết thắng."
            ],
            correct: "A",
            explanation: "Việc chăm lo sức dân và phát huy sức mạnh toàn dân là nền tảng tạo nên khối đoàn kết chống giặc."
          },
          {
            id: 5,
            prompt: "Yếu tố tự nhiên nào đã được Trần Quốc Tuấn khai thác triệt để trong trận Bạch Đằng năm 1288?",
            options: {
              A: "Sự lên xuống của thuỷ triều.",
              B: "Sự suy yếu của quân Mông - Nguyên.",
              C: "Cây cối hai bên bờ sông rậm rạp dễ bề mai phục.",
              D: "Con đường rút lui về Thăng Long thuận lợi."
            },
            options: [
              "Sự lên xuống của thuỷ triều.",
              "Sự suy yếu của quân Mông - Nguyên.",
              "Cây cối hai bên bờ sông rậm rạp dễ bề mai phục.",
              "Con đường rút lui về Thăng Long thuận lợi."
            ],
            correct: "A",
            explanation: "Nhà Trần tận dụng quy luật thuỷ triều lên xuống trên sông Bạch Đằng để nhử quân địch vào trận địa cọc."
            explanation: "Nhà Trần tận dụng quy luật thuỷ triều trên sông Bạch Đằng để nhử quân địch vào bãi cọc."
          },
          {
            id: 6,
            prompt: "Nội dung nào sau đây không phản ánh đúng ý nghĩa lịch sử của ba lần kháng chiến chống Mông - Nguyên của quân dân Đại Việt?",
            options: {
              A: "Bảo vệ vững chắc độc lập dân tộc, chủ quyền quốc gia.",
              B: "Đóng góp vào truyền thống và nghệ thuật quân sự Việt Nam.",
              C: "Ngăn chặn cuộc xâm lược của quân Nguyên đối với Nhật Bản và các nước Đông Nam Á, góp phần làm suy yếu đế chế Nguyên.",
              D: "Đưa Đại Việt trở thành nước hùng mạnh nhất khu vực Đông Nam Á."
            },
            options: [
              "Bảo vệ vững chắc độc lập dân tộc, chủ quyền quốc gia.",
              "Đóng góp vào truyền thống và nghệ thuật quân sự Việt Nam.",
              "Ngăn chặn cuộc xâm lược của quân Nguyên đối với Nhật Bản và các nước Đông Nam Á, góp phần làm suy yếu đế chế Nguyên.",
              "Đưa Đại Việt trở thành nước hùng mạnh nhất khu vực Đông Nam Á."
            ],
            correct: "D",
            explanation: "Ba lần kháng chiến có ý nghĩa rất lớn nhưng không đồng nghĩa Đại Việt trở thành nước mạnh nhất khu vực."
          },
          {
            id: 7,
            prompt: 'Nhà Trần khi thực hiện kế sách "vườn không nhà trống" không nhằm mục đích nào sau đây?',
            options: {
              A: "Tránh sức mạnh ban đầu của quân Mông Cổ.",
              B: "Khoét sâu vào điểm yếu của quân Mông Cổ.",
              C: "Củng cố lực lượng chờ phản công.",
              D: "Đánh nhanh thắng nhanh."
            },
            prompt: `Nhà Trần khi thực hiện kế sách "vườn không nhà trống" không nhằm mục đích nào sau đây?`,
            options: [
              "Tránh sức mạnh ban đầu của quân Mông Cổ.",
              "Khoét sâu vào điểm yếu của quân Mông Cổ.",
              "Củng cố lực lượng chờ phản công.",
              "Đánh nhanh thắng nhanh."
            ],
            correct: "D",
            explanation: 'Kế sách này nhằm tiêu hao địch, bảo toàn lực lượng và chờ phản công, không phải để "đánh nhanh thắng nhanh".'
            explanation: "Kế sách này nhằm tiêu hao địch, bảo toàn lực lượng và chờ phản công, không phải để đánh nhanh thắng nhanh."
          },
          {
            id: 8,
            prompt: "Hội nghị Diên Hồng do nhà Trần tổ chức đã triệu tập những thành phần nào để bàn kế hoạch đánh giặc?",
            options: {
              A: "Các quan lại cao cấp.",
              B: "Các vương hầu, quý tộc.",
              C: "Toàn bộ nhân dân Thăng Long.",
              D: "Các bô lão có uy tín."
            },
            options: [
              "Các quan lại cao cấp.",
              "Các vương hầu, quý tộc.",
              "Toàn bộ nhân dân Thăng Long.",
              "Các bô lão có uy tín."
            ],
            correct: "D",
            explanation: "Hội nghị Diên Hồng triệu tập các bô lão tiêu biểu để hỏi kế đánh giặc."
          },
          {
            id: 9,
            prompt: "Vương triều Hồ được thành lập là do",
            options: {
              A: "vua Trần nhường ngôi cho Hồ Quý Ly.",
              B: "Hồ Quý Ly buộc vua Trần nhường ngôi.",
              C: "nhà Minh yêu cầu nhà Trần truyền ngôi cho nhà Hồ.",
              D: "quý tộc Trần suy tôn Hồ Quý Ly lên ngôi."
            },
            options: [
              "vua Trần nhường ngôi cho Hồ Quý Ly.",
              "Hồ Quý Ly buộc vua Trần nhường ngôi.",
              "nhà Minh yêu cầu nhà Trần truyền ngôi cho nhà Hồ.",
              "quý tộc Trần suy tôn Hồ Quý Ly lên ngôi."
            ],
            correct: "B",
            explanation: "Theo bộ đáp án bạn đã chốt, ý đúng là Hồ Quý Ly buộc vua Trần nhường ngôi để lập ra nhà Hồ."
            explanation: "Theo bộ đáp án bạn chốt, ý đúng là Hồ Quý Ly buộc vua Trần nhường ngôi để lập ra nhà Hồ."
          },
          {
            id: 10,
            prompt: "Vì sao Hồ Quý Ly lại tiến hành cải cách toàn diện đất nước?",
            options: {
              A: "Muốn xoá bỏ mọi chính sách của nhà Trần.",
              B: "Muốn gây thanh thế cho mình.",
              C: "Xã hội Đại Việt lâm vào một cuộc khủng hoảng sâu sắc, tình hình rối ren, nhân dân bất bình.",
              D: "Muốn biến Đại Việt trở thành nước hùng mạnh nhất khu vực thời bấy giờ."
            },
            options: [
              "Muốn xoá bỏ mọi chính sách của nhà Trần.",
              "Muốn gây thanh thế cho mình.",
              "Xã hội Đại Việt lâm vào một cuộc khủng hoảng sâu sắc, tình hình rối ren, nhân dân bất bình.",
              "Muốn biến Đại Việt trở thành nước hùng mạnh nhất khu vực thời bấy giờ."
            ],
            correct: "C",
            explanation: "Cuối thời Trần, xã hội rơi vào khủng hoảng sâu sắc nên Hồ Quý Ly tiến hành cải cách để ổn định đất nước."
          },
          {
            id: 11,
            prompt: "Hồ Quý Ly tiến hành cải cách trong các lĩnh vực nào?",
            options: {
              A: "Chính trị, quân sự.",
              B: "Kinh tế, xã hội.",
              C: "Văn hoá, giáo dục.",
              D: "Cải cách toàn diện."
            },
            options: [
              "Chính trị, quân sự.",
              "Kinh tế, xã hội.",
              "Văn hoá, giáo dục.",
              "Cải cách toàn diện."
            ],
            correct: "D",
            explanation: "Cải cách của Hồ Quý Ly diễn ra trên nhiều mặt: chính trị, kinh tế, xã hội, quân sự, văn hoá và giáo dục."
          },
          {
            id: 12,
            prompt: "Để tăng cường sức mạnh quân sự, nhà Hồ đã thực hiện biện pháp gì?",
            options: {
              A: "Cải cách chế độ học tập, thi cử để chọn người tài.",
              B: "Thực hiện chính sách hạn điền, hạn nô.",
              C: "Lập lại kỉ cương, cải tổ quy chế quan lại.",
              D: "Tăng cường lực lượng quân đội chính quy, xây dựng nhiều thành luỹ."
            },
            options: [
              "Cải cách chế độ học tập, thi cử để chọn người tài.",
              "Thực hiện chính sách hạn điền, hạn nô.",
              "Lập lại kỉ cương, cải tổ quy chế quan lại.",
              "Tăng cường lực lượng quân đội chính quy, xây dựng nhiều thành luỹ."
            ],
            correct: "D",
            explanation: "Nhà Hồ tăng cường quân đội chính quy và xây dựng nhiều thành luỹ để củng cố quốc phòng."
          },
          {
            id: 13,
            prompt: "Ý nào không đúng về tác động tích cực của cải cách Hồ Quý Ly?",
            options: {
              A: "Góp phần củng cố quyền lực của chính quyền trung ương.",
              B: "Tăng cường tiềm lực kinh tế đất nước.",
              C: "Góp phần phát triển văn hoá dân tộc.",
              D: "Nhiều biện pháp cải cách chưa triệt để, kết quả thực hiện còn hạn chế."
            },
            options: [
              "Góp phần củng cố quyền lực của chính quyền trung ương.",
              "Tăng cường tiềm lực kinh tế đất nước.",
              "Góp phần phát triển văn hoá dân tộc.",
              "Nhiều biện pháp cải cách chưa triệt để, kết quả thực hiện còn hạn chế."
            ],
            correct: "D",
            explanation: "Đây là nhận xét về hạn chế của cải cách Hồ Quý Ly, không phải tác động tích cực."
          },
          {
            id: 14,
            prompt: "Quân Minh lấy cớ nào để tiến hành xâm lược Đại Việt?",
            options: {
              A: "Nhà Hồ cướp ngôi nhà Trần.",
              B: "Quý tộc Trần cầu cứu nhà Minh giúp đỡ.",
              C: "Nhà Hồ không thực hiện chế độ triều cống nhà Minh.",
              D: "Quân đội nhà Hồ quấy nhiễu biên giới phía Nam."
            },
            options: [
              "Nhà Hồ cướp ngôi nhà Trần.",
              "Quý tộc Trần cầu cứu nhà Minh giúp đỡ.",
              "Nhà Hồ không thực hiện chế độ triều cống nhà Minh.",
              "Quân đội nhà Hồ quấy nhiễu biên giới phía Nam."
            ],
            correct: "A",
            explanation: 'Nhà Minh lấy cớ "phù Trần diệt Hồ" để đem quân xâm lược Đại Việt.'
            explanation: `Nhà Minh lấy cớ "phù Trần diệt Hồ" để đem quân xâm lược Đại Việt.`
          },
          {
            id: 15,
            prompt: "Nguyên nhân dẫn đến cuộc khởi nghĩa Lam Sơn là gì?",
            options: {
              A: "Chính sách cai trị tàn độc của quân Minh đối với nhân dân Đại Việt.",
              B: "Quân Minh ép Lê Lợi ra làm quan.",
              C: "Do tác động của cuộc khởi nghĩa Trần Ngỗi và Trần Quý Khoáng.",
              D: "Vương triều Hồ đã thất bại trong cuộc kháng chiến chống Minh."
            },
            options: [
              "Chính sách cai trị tàn độc của quân Minh đối với nhân dân Đại Việt.",
              "Quân Minh ép Lê Lợi ra làm quan.",
              "Do tác động của cuộc khởi nghĩa Trần Ngỗi và Trần Quý Khoáng.",
              "Vương triều Hồ đã thất bại trong cuộc kháng chiến chống Minh."
            ],
            correct: "A",
            explanation: "Chính sách cai trị tàn bạo của quân Minh là nguyên nhân trực tiếp làm bùng nổ khởi nghĩa Lam Sơn."
          },
          {
            id: 16,
            prompt: "Nơi Lê Lợi chọn làm căn cứ cho cuộc khởi nghĩa là",
            options: {
              A: "Lang Chánh (Thanh Hoá).",
              B: "Tây Đô (Thanh Hoá).",
              C: "Lam Sơn (Thanh Hoá).",
              D: "Thọ Xuân (Thanh Hoá)."
            },
            options: [
              "Lang Chánh (Thanh Hoá).",
              "Tây Đô (Thanh Hoá).",
              "Lam Sơn (Thanh Hoá).",
              "Thọ Xuân (Thanh Hoá)."
            ],
            correct: "C",
            explanation: "Lam Sơn (Thanh Hoá) là căn cứ mở đầu cho cuộc khởi nghĩa do Lê Lợi lãnh đạo."
          },
          {
            id: 17,
            prompt: "Vì sao cuối năm 1424, Nguyễn Chích hiến kế cho nghĩa quân Lam Sơn đánh chiếm Nghệ An?",
            options: {
              A: "Căn cứ của nghĩa quân ở Thanh Hoá đã bị quân Minh chiếm.",
              B: "Nghệ An không có quân Minh nên dễ dàng đánh chiếm.",
              C: "Nghệ An là quê hương của Nguyễn Chích, nên ông rất hiểu về vùng đất này.",
              D: "Nghệ An là vùng đất rộng, người đông, địa thế hiểm yếu, có thể làm căn cứ lâu dài để phát triển lực lượng nghĩa quân."
            },
            options: [
              "Căn cứ của nghĩa quân ở Thanh Hoá đã bị quân Minh chiếm.",
              "Nghệ An không có quân Minh nên dễ dàng đánh chiếm.",
              "Nghệ An là quê hương của Nguyễn Chích, nên ông rất hiểu về vùng đất này.",
              "Nghệ An là vùng đất rộng, người đông, địa thế hiểm yếu, có thể làm căn cứ lâu dài để phát triển lực lượng nghĩa quân."
            ],
            correct: "D",
            explanation: "Nghệ An là vùng đất rộng, đông dân và thuận lợi để nghĩa quân xây dựng căn cứ lâu dài."
          },
          {
            id: 18,
            prompt: "Tháng 11 - 1426, nghĩa quân Lam Sơn đã mai phục và giành thắng lợi trước quân Minh ở đâu?",
            options: {
              A: "Tốt Động - Chúc Động (Hà Nội).",
              B: "Chi Lăng - Xương Giang (Lạng Sơn - Bắc Ninh).",
              C: "Đông Quan (Hà Nội).",
              D: "Tây Đô (Thanh Hoá)."
            },
            prompt: "Tháng 11 – 1426, nghĩa quân Lam Sơn đã mai phục và giành thắng lợi trước quân Minh ở đâu?",
            options: [
              "Tốt Động - Chúc Động (Hà Nội).",
              "Chi Lăng - Xương Giang (Lạng Sơn - Bắc Ninh).",
              "Đông Quan (Hà Nội).",
              "Tây Đô (Thanh Hoá)."
            ],
            correct: "A",
            explanation: "Chiến thắng Tốt Động - Chúc Động tháng 11/1426 làm thay đổi cục diện chiến tranh theo hướng có lợi cho nghĩa quân."
          },
          {
            id: 19,
            prompt: "Tại ải Chi Lăng (Lạng Sơn), nghĩa quân Lam Sơn đã phục kích và giết tướng Minh là",
            options: {
              A: "Vương Thông.",
              B: "Mộc Thạnh.",
              C: "Liễu Thăng.",
              D: "Trần Trí."
            },
            options: [
              "Vương Thông.",
              "Mộc Thạnh.",
              "Liễu Thăng.",
              "Trần Trí."
            ],
            correct: "C",
            explanation: "Tướng Minh Liễu Thăng bị giết tại ải Chi Lăng trong chiến dịch năm 1427."
          },
          {
            id: 20,
            prompt: "Nguyên nhân quan trọng nhất quyết định sự thắng lợi của cuộc khởi nghĩa Lam Sơn là gì?",
            options: {
              A: "Do nhân dân ta luôn nêu cao tinh thần yêu nước nồng nàn, ý chí và quyết tâm giành lại độc lập cho dân tộc.",
              B: "Do quân Minh suy yếu và không còn ý chí chiến đấu.",
              C: "Do đường lối lãnh đạo đúng đắn, sáng tạo của bộ chỉ huy nghĩa quân.",
              D: "Do nghĩa quân Lam Sơn có tinh thần kỉ luật cao, lực lượng đông đảo và vũ khí tốt."
            },
            options: [
              "Do nhân dân ta luôn nêu cao tinh thần yêu nước nồng nàn, ý chí và quyết tâm giành lại độc lập cho dân tộc.",
              "Do quân Minh suy yếu và không còn ý chí chiến đấu.",
              "Do đường lối lãnh đạo đúng đắn, sáng tạo của bộ chỉ huy nghĩa quân.",
              "Do nghĩa quân Lam Sơn có tinh thần kỉ luật cao, lực lượng đông đảo và vũ khí tốt."
            ],
            correct: "A",
            explanation: "Theo bộ đáp án đã chốt, nguyên nhân quan trọng nhất là tinh thần yêu nước và quyết tâm giành lại độc lập của nhân dân ta."
            explanation: "Theo bộ đáp án bạn chốt, nguyên nhân quan trọng nhất là tinh thần yêu nước và quyết tâm giành lại độc lập của nhân dân ta."
          }
        ]
      },
      {
        id: "tf",
        partLabel: "B. Đúng / Sai",
        label: "Đúng / Sai",
        shortLabel: "6 Đ/S",
        description: "1 câu gồm 6 nhận định",
        label: "B. Đúng / Sai",
        cardTitle: "B. Đúng / Sai",
        cardSubtitle: "1 câu gồm 6 nhận định",
        badge: "6 Đ/S",
        color: "green",
        icon: "check",
        quizTitle: "Đúng / Sai Lịch sử",
        instructions: "Đánh dấu Đúng hoặc Sai cho từng nhận định.",
        type: "tf",
        questions: [
          {
              },
              {
                key: "C",
                text: '"Bệ hạ chém đầu thần trước rồi hãy hàng" là câu nói của Trần Quốc Tuấn khi trả lời vua Trần Thánh Tông.',
                text: `"Bệ hạ chém đầu thần trước rồi hãy hàng" là câu nói của Trần Quốc Tuấn khi trả lời vua Trần Thánh Tông.`,
                correct: true,
                explanation: "Nhận định này đúng theo nội dung thường dùng trong sách bài tập và các nguồn ôn tập lớp 7."
                explanation: "Nhận định này đúng theo nội dung ôn tập phổ biến trong chương trình lớp 7."
              },
              {
                key: "D",
                text: "Năm 1289, Trần Quốc Tuấn được vua phong tước Hưng Đạo Đại Vương.",
                correct: false,
                explanation: "Nhận định này sai theo đáp án chuẩn của bộ bài tập lớp 7 cho phần này."
                explanation: "Nhận định này sai theo đáp án chuẩn của bộ bài tập cho phần ôn tập này."
              },
              {
                key: "E",
                key: "F",
                text: "Năm 1288, trên đường bộ, Thoát Hoan phải chui vào ống đồng bắt quân lính khiêng, tháo chạy về nước.",
                correct: false,
                explanation: "Nhận định này sai theo đáp án bộ bài tập; chi tiết chui ống đồng thường gắn với đợt tháo chạy năm 1285."
                explanation: "Nhận định này sai; chi tiết chui ống đồng thường gắn với đợt tháo chạy năm 1285."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "geography",
    title: "Địa lí",
    tileTitle: "ÔN ĐỊA 6.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "SẮP CẬP NHẬT",
    color: "cyan",
    icon: "globe",
    active: false
  },
  {
    id: "geography-tf",
    title: "Địa lí Đ/S",
    tileTitle: "ÔN ĐỊA Đ/S 6.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "SẮP CẬP NHẬT",
    color: "green",
    icon: "check",
    active: false
  },
  {
    id: "biology",
    title: "Sinh học",
    tileTitle: "ÔN SINH 4.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "SẮP CẬP NHẬT",
    color: "lime",
    icon: "spark",
    active: false
  },
  {
    id: "physics",
    title: "Vật lí",
    tileTitle: "ÔN LÝ 4.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "SẮP CẬP NHẬT",
    color: "blue",
    icon: "bolt",
    active: false
  },
  {
    id: "chemistry",
    title: "Hoá học",
    tileTitle: "ÔN HÓA 4.5.26",
    tileSubtitle: "ĐGCK",
    tileMeta: "SẮP CẬP NHẬT",
    color: "orange",
    icon: "flask",
    active: false
  }
];


const state = {
  view: "home",
  subjectId: null,
  subjectId: "history",
  moduleId: null,
  questionIndex: 0,
  reviewMode: "idle",
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
}

function clearAllProgress() {
  const confirmed = window.confirm("Xoá toàn bộ tiến độ đã lưu trên thiết bị này?");
  if (!confirmed) {
    return;
  }

  state.store = { progress: {} };
  state.view = "home";
  state.subjectId = "history";
  state.moduleId = null;
  state.questionIndex = 0;
  state.reviewMode = "idle";
  saveStore();
  renderApp();
}

function getSubject(subjectId) {
  return curriculum.find((subject) => subject.id === subjectId);
}

function getModule(subject, moduleId) {
  return subject.modules.find((module) => module.id === moduleId);
  return subject?.modules?.find((module) => module.id === moduleId);
}

function getBucket(subjectId, moduleId) {
  };

  return state.store.progress[subjectId][moduleId];
}

function resetReviewMode() {
  state.reviewMode = "idle";
}

function openSubject(subjectId) {
  const subject = getSubject(subjectId);
  if (!subject) {
  if (!subject || !subject.active) {
    return;
  }

  const firstModule = subject.modules[0];
  const bucket = getBucket(subjectId, firstModule.id);

  state.view = "subject";
  state.subjectId = subjectId;
  state.moduleId = firstModule.id;
  state.questionIndex = bucket.questionIndex || 0;
  resetReviewMode();
  state.moduleId = null;
  state.questionIndex = 0;
  state.reviewMode = "idle";
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
}

function switchModule(moduleId) {
function openModule(moduleId) {
  const subject = getSubject(state.subjectId);
  const module = getModule(subject, moduleId);
  if (!module) {
    return;
  }

  const bucket = getBucket(state.subjectId, moduleId);
  const bucket = getBucket(subject.id, module.id);
  state.view = "quiz";
  state.moduleId = moduleId;
  state.questionIndex = bucket.questionIndex || 0;
  resetReviewMode();
  state.reviewMode = "idle";
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderApp();
}

function goHome() {
  state.view = "home";
  state.moduleId = null;
  state.questionIndex = 0;
  state.reviewMode = "idle";
  renderApp();
}

function goSubject() {
  state.view = "subject";
  state.questionIndex = 0;
  state.reviewMode = "idle";
  renderApp();
}

function moveToQuestion(index) {
  const subject = getSubject(state.subjectId);
  const module = getModule(subject, state.moduleId);
  const safeIndex = Math.max(0, Math.min(index, module.questions.length - 1));
  const bucket = getBucket(state.subjectId, state.moduleId);
  if (!module) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(index, module.questions.length - 1));
  const bucket = getBucket(subject.id, module.id);
  state.questionIndex = safeIndex;
  bucket.questionIndex = safeIndex;
  saveStore();
function setMcqAnswer(questionId, choice) {
  const bucket = getBucket(state.subjectId, state.moduleId);
  bucket.answers[String(questionId)] = choice;
  state.reviewMode = "idle";
  saveStore();
  resetReviewMode();
  renderApp();
}

function setTfAnswer(questionId, statementKey, value) {
  const bucket = getBucket(state.subjectId, state.moduleId);
  bucket.answers[`${questionId}:${statementKey}`] = value;
  state.reviewMode = "idle";
  saveStore();
  resetReviewMode();
  renderApp();
}

function resetModuleProgress() {
  const confirmed = window.confirm("Xóa toàn bộ tiến độ của phần này và làm lại từ đầu?");
  const confirmed = window.confirm("Xoá tiến độ của phần này và làm lại từ đầu?");
  if (!confirmed) {
    return;
  }

  state.store.progress[state.subjectId] ??= {};
  state.store.progress[state.subjectId][state.moduleId] = {
    answers: {},
    questionIndex: 0
  };

  state.questionIndex = 0;
  resetReviewMode();
  state.reviewMode = "idle";
  saveStore();
  renderApp();
}

function percentage(value, total) {
  if (total === 0) {
  if (!total) {
    return 0;
  }

}

function getMcqStats(module, answers) {
  let answered = 0;
  let correct = 0;
  let answeredUnits = 0;
  let correctUnits = 0;

  const history = module.questions.map((question) => {
    const selected = answers[String(question.id)] || null;
    const done = Boolean(selected);
    const ok = selected === question.correct;
    const answered = Boolean(selected);
    const correct = selected === question.correct;

    if (done) {
      answered += 1;
    if (answered) {
      answeredUnits += 1;
    }

    if (ok) {
      correct += 1;
    if (correct) {
      correctUnits += 1;
    }

    return {
      id: question.id,
      answered: done,
      answered,
      partial: false,
      correct: ok
      correct
    };
  });

  return {
    totalUnits: module.questions.length,
    answeredUnits: answered,
    correctUnits: correct,
    score: module.questions.length === 0 ? 0 : (correct / module.questions.length) * 10,
    answeredUnits,
    correctUnits,
    score: module.questions.length ? (correctUnits / module.questions.length) * 10 : 0,
    history
  };
}
    question.statements.forEach((statement) => {
      totalUnits += 1;
      const value = answers[`${question.id}:${statement.key}`];
      const done = typeof value === "boolean";
      const ok = value === statement.correct;
      const answered = typeof value === "boolean";
      const correct = value === statement.correct;

      if (done) {
      if (answered) {
        answeredUnits += 1;
        localAnswered += 1;
      }

      if (ok) {
      if (correct) {
        correctUnits += 1;
        localCorrect += 1;
      }
    totalUnits,
    answeredUnits,
    correctUnits,
    score: totalUnits === 0 ? 0 : (correctUnits / totalUnits) * 10,
    score: totalUnits ? (correctUnits / totalUnits) * 10 : 0,
    history
  };
}
}

function getSubjectStats(subject) {
  if (!subject?.modules?.length) {
    return {
      totalUnits: 0,
      answeredUnits: 0,
      correctUnits: 0,
      completion: 0
    };
  }

  let totalUnits = 0;
  let answeredUnits = 0;
  let correctUnits = 0;

  const modules = subject.modules.map((module) => {
  subject.modules.forEach((module) => {
    const bucket = getBucket(subject.id, module.id);
    const stats = getModuleStats(module, bucket.answers);

    totalUnits += stats.totalUnits;
    answeredUnits += stats.answeredUnits;
    correctUnits += stats.correctUnits;

    return {
      module,
      stats
    };
  });

  return {
    totalUnits,
    answeredUnits,
    correctUnits,
    completion: percentage(answeredUnits, totalUnits),
    modules
    completion: percentage(answeredUnits, totalUnits)
  };
}

function getTopbarScore(stats) {
  if (state.reviewMode === "submit") {
    return `Đúng: ${stats.correctUnits}/${stats.totalUnits}`;
  }

  if (state.reviewMode === "show") {
    return "Đáp án";
  }

  return "Đúng: 0/0";
}

function getPerformance(score) {
  if (score >= 9) {
    return {
  if (score >= 7) {
    return {
      title: "Đang vào form",
      text: "Nền tảng đã ổn, chỉ cần rà thêm những câu dễ nhầm."
      text: "Nền tảng đã ổn, chỉ cần rà thêm các câu dễ nhầm."
    };
  }

  };
}

function renderHomeView() {
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
    subject,
    stats: getSubjectStats(subject)
  }));
function icon(name) {
  return icons[name] || icons.book;
}

  const totalUnits = summaries.reduce((sum, item) => sum + item.stats.totalUnits, 0);
  const answeredUnits = summaries.reduce((sum, item) => sum + item.stats.answeredUnits, 0);
  const completion = percentage(answeredUnits, totalUnits);
function renderHomeView() {
  const tiles = curriculum.map((subject) => {
    const classes = ["tile", subject.color];
    const actionAttr = subject.active
      ? `data-action="open-subject" data-subject-id="${subject.id}"`
      : "";

  const activeCards = summaries.map(({ subject, stats }) => {
    const moduleTags = subject.modules
      .map((module) => `<span class="module-mini-tag">${module.shortLabel}</span>`)
      .join("");
    if (!subject.active) {
      classes.push("disabled");
    }

    return `
      <button class="subject-card history fade-up" data-action="open-subject" data-subject-id="${subject.id}">
        <div class="subject-card-top">
          <span class="subject-icon">${subject.icon}</span>
          <span class="pill">${stats.completion}% hoàn thành</span>
        </div>
        <h2>${subject.title}</h2>
        <p>${subject.tagline}</p>
        <div class="subject-progress">
          <div class="progress-track"><span style="width: ${stats.completion}%"></span></div>
          <div class="subject-card-foot">
            <div>
              <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
              <div class="muted">đơn vị đã làm</div>
            </div>
            <div class="card-meta">${moduleTags}</div>
          </div>
      <button class="${classes.join(" ")} fade-up" type="button" ${actionAttr} ${subject.active ? "" : "aria-disabled=\"true\""}>
        <div class="tile-icon">${icon(subject.icon)}</div>
        <div class="tile-body">
          <h2 class="tile-title">${subject.tileTitle}</h2>
          <p class="tile-subtitle">${subject.tileSubtitle}</p>
          <span class="tile-meta">${subject.tileMeta}</span>
        </div>
      </button>
    `;
  }).join("");

  const upcomingCards = placeholders.map((item) => `
    <article class="placeholder-card fade-up">
      <div>
        <strong>${item.title}</strong>
        <p class="empty-note">${item.note}</p>
      </div>
    </article>
  `).join("");

  app.innerHTML = `
    <section class="home-view">
      <section class="hero-panel fade-up">
        <div class="hero-copy">
          <p class="eyebrow">Dashboard ôn tập</p>
          <h1>Ôn theo từng môn, gọn hơn để thêm bài sau này</h1>
          <p>Hiện tại mình tách sẵn cấu trúc theo môn học và dựng hoàn chỉnh riêng phần Lịch sử. Khi có Địa lí hoặc môn khác, chỉ cần thêm dữ liệu là chạy tiếp trên đúng giao diện này.</p>
          <div class="hero-meta-row">
            <span class="chip">${curriculum.length} môn hoạt động</span>
            <span class="chip">${summaries[0].subject.modules.length} module trong Lịch sử</span>
            <span class="chip">${totalUnits} đơn vị luyện tập</span>
          </div>
    <section class="board fade-up">
      <div class="board-hero">
        <div class="board-hero-row">
          <span></span>
          <button class="hero-settings" data-action="clear-progress">${icon("settings")} Cài đặt</button>
        </div>

        <div class="hero-metrics">
          <article class="hero-metric">
            <span class="muted">Tiến độ toàn app</span>
            <strong>${completion}%</strong>
            <p>${answeredUnits}/${totalUnits} đơn vị đã được làm trên thiết bị này.</p>
          </article>
          <article class="hero-metric">
            <span class="muted">Cấu trúc hiện tại</span>
            <strong>Theo từng môn</strong>
            <p>Home -> Môn học -> Dạng bài. Sẵn để gắn thêm môn khác mà không phải sửa flow.</p>
          </article>
          <article class="hero-metric">
            <span class="muted">Triển khai</span>
            <strong>GitHub Pages</strong>
            <p>Chạy hoàn toàn bằng HTML, CSS và JavaScript thuần, không cần backend.</p>
          </article>
        <div class="hero-center">
          <div class="hero-icon">${icon("book")}</div>
          <h1 class="hero-title">Ôn Tập Bài Học</h1>
          <p class="hero-subtitle">Chọn môn học để bắt đầu</p>
        </div>
      </section>
      </div>

      <section class="subject-grid">
        ${activeCards}
      </section>

      <section class="coming-grid">
        ${upcomingCards}
      </section>
      <div class="board-body">
        <div class="tile-grid">
          ${tiles}
        </div>
        <p class="board-note">
          <strong>Hiện đang mở:</strong> môn Lịch sử với 2 phần riêng là <strong>Trắc nghiệm</strong> và <strong>Đúng / Sai</strong>.
          Các ô còn lại đang để sẵn khung giao diện để thêm môn sau.
        </p>
      </div>
    </section>
  `;
}

function renderModuleTabs(subject, activeModule) {
  return subject.modules.map((module) => {
function renderSubjectView() {
  const subject = getSubject(state.subjectId);
  const stats = getSubjectStats(subject);

  const tiles = subject.modules.map((module) => {
    const bucket = getBucket(subject.id, module.id);
    const stats = getModuleStats(module, bucket.answers);
    const completion = percentage(stats.answeredUnits, stats.totalUnits);
    const moduleStats = getModuleStats(module, bucket.answers);
    const completion = percentage(moduleStats.answeredUnits, moduleStats.totalUnits);

    return `
      <button
        class="module-tab module-${module.id} ${module.id === activeModule.id ? "active" : ""}"
        data-action="switch-module"
        class="tile ${module.color} fade-up"
        type="button"
        data-action="open-module"
        data-module-id="${module.id}"
      >
        <div class="module-tab-top">
          <strong>${module.partLabel}</strong>
          <span class="soft-pill">${module.shortLabel}</span>
        <div class="tile-icon">${icon(module.icon)}</div>
        <div class="tile-body">
          <h2 class="tile-title">${module.cardTitle}</h2>
          <p class="tile-subtitle">${module.cardSubtitle}</p>
          <span class="tile-meta">${module.badge} • ${completion}%</span>
        </div>
        <span>${module.description}</span>
        <div class="module-progress"><span style="width: ${completion}%"></span></div>
        <div class="module-tab-foot">
          <span>${stats.answeredUnits}/${stats.totalUnits} đã làm</span>
          <span>${completion}%</span>
        </div>
      </button>
    `;
  }).join("");

  app.innerHTML = `
    <section class="board fade-up">
      <div class="board-hero compact">
        <div class="board-hero-row">
          <button class="back-link" data-action="go-home">← Chọn môn khác</button>
          <span></span>
        </div>
        <div class="hero-center">
          <div class="hero-icon">${icon("file")}</div>
          <h1 class="hero-title">${subject.heroTitle}</h1>
          <p class="hero-subtitle">${subject.heroSubtitle}</p>
        </div>
      </div>

      <div class="board-body">
        <div class="tile-grid two-col">
          ${tiles}
        </div>
        <p class="board-note">
          Tiến độ môn hiện tại: <strong>${stats.answeredUnits}/${stats.totalUnits}</strong> đơn vị đã làm.
          Mỗi phần được lưu riêng, nên bạn có thể làm dở rồi quay lại sau.
        </p>
      </div>
    </section>
  `;
}

function renderHistoryChips(module, stats) {
      </button>
    `;
  }).join("");
}

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
    const performance = getPerformance(stats.score);

    return `
      <div class="score-card">
        <div class="score-row">
          <div class="score-badge">${stats.score.toFixed(1)}</div>
          <div class="score-copy">
            <strong>${performance.title}</strong>
            <p>${performance.text}</p>
          </div>
        </div>
        <div class="score-grid">
          <div class="meta-row">
            <span>Phần đang chấm</span>
            <strong>${module.label}</strong>
          </div>
          <div class="meta-row">
            <span>Đúng</span>
            <strong>${stats.correctUnits}/${stats.totalUnits}</strong>
          </div>
          <div class="meta-row">
            <span>Đã làm</span>
            <strong>${stats.answeredUnits}</strong>
          </div>
          <div class="meta-row">
            <span>Bỏ trống</span>
            <strong>${stats.totalUnits - stats.answeredUnits}</strong>
          </div>
        </div>
      </div>
    `;
  }

  if (state.reviewMode === "show") {
    return `
      <div class="empty-box">
        <p class="muted">Bạn đang ở chế độ xem đáp án nhanh cho phần <strong>${module.label}</strong>.</p>
      </div>
    `;
  }

  return `
    <div class="empty-box">
      <p class="muted">Bấm <strong>Nộp bài</strong> để chấm điểm, hoặc <strong>Xem đáp án</strong> để rà nhanh toàn bộ.</p>
    </div>
  `;
}

function renderMcqQuestion(module, answers) {
  const question = module.questions[state.questionIndex];
  const selected = answers[String(question.id)] || null;
  const selectedState = selected ? `Đã chọn ${selected}` : "Chưa chọn";

  const options = Object.entries(question.options).map(([key, text]) => {
    const classes = ["option-button"];
    let helper = selected === key ? "Đang chọn" : "";
  const options = question.options.map((text, index) => {
    const letter = LETTERS[index];
    const classes = ["option-card"];
    let helper = "";

    if (selected === key) {
    if (selected === letter) {
      classes.push("selected");
      helper = "Đang chọn";
    }

    if (state.reviewMode === "submit" || state.reviewMode === "show") {
      if (question.correct === key) {
      if (question.correct === letter) {
        classes.push("correct");
        helper = "Đáp án";
      } else if (selected === key && selected !== question.correct) {
      } else if (selected === letter && selected !== question.correct) {
        classes.push("incorrect");
        helper = "Bạn chọn";
      } else {
        helper = "";
      }
    }

        class="${classes.join(" ")}"
        data-action="pick-mcq"
        data-question-id="${question.id}"
        data-choice="${key}"
        data-choice="${letter}"
      >
        <span class="option-line">
          <span class="option-key">${key}</span>
          <span class="option-key">${letter}</span>
          <span class="option-copy">
            <strong>Đáp án ${key}</strong>
            <strong>Đáp án ${letter}</strong>
            <span>${text}</span>
          </span>
          <span class="option-helper">${helper}</span>
  }

  return `
    <article class="question-shell fade-up">
      <div class="question-shell-top">
    <div class="question-panel fade-up">
      <div class="question-panel-head">
        <div>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-chip">${selectedState}</span>
            <span class="question-chip">Phím 1 2 3 4</span>
          </div>
          <h3 class="question-title">${question.prompt}</h3>
          <p class="question-subcopy">Chọn một đáp án đúng. Bạn có thể dùng phím mũi tên trái phải để đổi câu nhanh.</p>
          <p class="question-label">Câu ${question.id}</p>
          <h2 class="question-title">${question.prompt}</h2>
          <p class="question-copy">Chọn một đáp án đúng. Bạn có thể dùng phím 1 2 3 4 để chọn nhanh.</p>
        </div>
        <div class="question-counter-card">
        <div class="question-counter">
          <strong>${String(state.questionIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
      </div>
      <div class="option-list">${options}</div>
      ${note}
    </article>

      <div class="question-panel-body">
        <div class="question-tags">
          <span class="question-tag">${selected ? `Đã chọn ${selected}` : "Chưa chọn"}</span>
          <span class="question-tag">← → đổi câu</span>
          <span class="question-tag">Enter nộp bài</span>
        </div>
        <div class="option-list">${options}</div>
        ${note}
      </div>
    </div>
  `;
}

function getTruthLabel(value) {
function truthLabel(value) {
  return value ? "Đúng" : "Sai";
}

  const statements = question.statements.map((statement) => {
    const storageKey = `${question.id}:${statement.key}`;
    const selected = answers[storageKey];
    const selectedLabel = typeof selected === "boolean" ? getTruthLabel(selected) : "Chưa chọn";
    const correctLabel = getTruthLabel(statement.correct);
    const selectedLabel = typeof selected === "boolean" ? truthLabel(selected) : "Chưa chọn";
    const correctLabel = truthLabel(statement.correct);
    const isAnswered = typeof selected === "boolean";
    const isCorrect = selected === statement.correct;

    const rowClasses = ["statement-row"];
    const rowClasses = ["statement-card"];
    if (state.reviewMode === "submit") {
      rowClasses.push(isCorrect ? "correct" : "incorrect");
    }

    return `
      <article class="${rowClasses.join(" ")}">
        <div class="statement-main">
          <div class="statement-head">
        <div class="statement-head">
          <div class="statement-main">
            <div class="statement-line">
              <span class="statement-key">${statement.key}</span>
              <p class="statement-text">${statement.text}</p>
            </div>
            <span class="statement-status">${selectedLabel}</span>
            <div class="statement-actions">
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
          <span class="statement-status">${selectedLabel}</span>
        </div>
      </article>
    `;
  }).join("");

  return `
    <article class="question-shell fade-up">
      <div class="question-shell-top">
    <div class="question-panel fade-up">
      <div class="question-panel-head">
        <div>
          <div class="question-chip-row">
            <span class="question-index">Câu ${question.id}</span>
            <span class="question-chip">${question.statements.length} nhận định</span>
            <span class="question-chip">Chọn đúng / sai từng ý</span>
          </div>
          <h3 class="question-title">${question.title}</h3>
          <p class="question-subcopy">${question.prompt}</p>
          <p class="question-label">Câu ${question.id}</p>
          <h2 class="question-title">${question.title}</h2>
          <p class="question-copy">${question.prompt}</p>
        </div>
        <div class="question-counter-card">
        <div class="question-counter">
          <strong>${String(state.questionIndex + 1).padStart(2, "0")}</strong>
          <span>/ ${String(module.questions.length).padStart(2, "0")}</span>
        </div>
      </div>
      <div class="statement-list">${statements}</div>
    </article>

      <div class="question-panel-body">
        <div class="question-tags">
          <span class="question-tag">${question.statements.length} nhận định</span>
          <span class="question-tag">Chọn đúng / sai từng ý</span>
        </div>
        <div class="statement-list">${statements}</div>
      </div>
    </div>
  `;
}

function renderQuestionArea(module, answers) {
  return module.type === "mcq"
    ? renderMcqQuestion(module, answers)
    : renderTfQuestion(module, answers);
function renderResultBox(stats, module) {
  if (state.reviewMode === "submit") {
    const performance = getPerformance(stats.score);

    return `
      <div class="score-summary">
        <div class="score-badge">${stats.score.toFixed(1)}</div>
        <div class="score-copy">
          <strong>${performance.title}</strong>
          <div class="side-copy">${performance.text}</div>
        </div>
      </div>
      <div class="side-meta">
        <div class="meta-row">
          <span>Phần đang chấm</span>
          <strong>${module.label}</strong>
        </div>
        <div class="meta-row">
          <span>Đúng</span>
          <strong>${stats.correctUnits}/${stats.totalUnits}</strong>
        </div>
        <div class="meta-row">
          <span>Đã làm</span>
          <strong>${stats.answeredUnits}</strong>
        </div>
        <div class="meta-row">
          <span>Bỏ trống</span>
          <strong>${stats.totalUnits - stats.answeredUnits}</strong>
        </div>
      </div>
    `;
  }

  if (state.reviewMode === "show") {
    return `<div class="soft-box">Bạn đang ở chế độ xem đáp án nhanh cho phần <strong>${module.label}</strong>.</div>`;
  }

  return `<div class="soft-box">Bấm <strong>Nộp bài</strong> để chấm điểm hoặc <strong>Xem đáp án</strong> để rà nhanh toàn bộ.</div>`;
}

function renderSubjectView() {
function renderQuizView() {
  const subject = getSubject(state.subjectId);
  const module = getModule(subject, state.moduleId);
  const bucket = getBucket(subject.id, module.id);
  const answers = bucket.answers;
  const stats = getModuleStats(module, answers);
  const subjectStats = getSubjectStats(subject);
  const completion = percentage(stats.answeredUnits, stats.totalUnits);
  const heroAngle = (completion / 100) * 360;
  const scoreLabel = getTopbarScore(stats);

  state.questionIndex = Math.max(0, Math.min(bucket.questionIndex || 0, module.questions.length - 1));

  const questionMarkup = module.type === "mcq"
    ? renderMcqQuestion(module, answers)
    : renderTfQuestion(module, answers);

  app.innerHTML = `
    <section class="subject-view">
      <section class="subject-hero fade-up">
        <div class="subject-hero-top">
          <button class="back-link" data-action="go-home">← Trang chủ</button>
          <span class="soft-pill">${subject.shortTitle}</span>
    <section class="quiz-shell">
      <section class="quiz-main fade-up">
        <div class="quiz-topbar">
          <div class="quiz-topbar-left">
            <button class="quiz-home-link" data-action="go-subject">← Chọn phần khác</button>
          </div>
          <div class="quiz-topbar-left">
            <button class="quiz-mode-button" type="button" aria-label="Chế độ câu hỏi">${icon("grid")}</button>
            <span class="score-indicator">${scoreLabel}</span>
          </div>
        </div>

        <div class="subject-hero-grid">
          <div class="subject-copy">
            <p class="eyebrow">Môn học đang mở</p>
            <h2>${subject.title}</h2>
            <p class="muted">${subject.tagline}</p>

            <div class="hero-stat-grid">
              <article class="hero-stat-card">
                <span class="muted">Tổng tiến độ môn</span>
                <strong>${subjectStats.completion}%</strong>
              </article>
              <article class="hero-stat-card">
                <span class="muted">Đã làm</span>
                <strong>${subjectStats.answeredUnits}/${subjectStats.totalUnits}</strong>
              </article>
              <article class="hero-stat-card">
                <span class="muted">Phần hiện tại</span>
                <strong>${module.shortLabel}</strong>
              </article>
            </div>
          </div>
        <div class="quiz-content">
          ${questionMarkup}

          <div class="hero-focus-card">
            <div class="hero-focus-head">
              <span class="soft-pill">Module đang học</span>
              <strong>${module.partLabel}</strong>
              <span>${module.description}</span>
          <div class="question-actions">
            <button class="action-button primary" data-action="submit-module">Nộp bài</button>
            <div class="sub-actions">
              <button class="sub-action" data-action="show-answers">Xem đáp án</button>
              <button class="sub-action" data-action="reset-module">Làm lại</button>
            </div>

            <div class="hero-focus-foot">
              <div class="hero-ring" style="--hero-angle: ${heroAngle}deg;">
                <strong>${completion}%</strong>
              </div>
              <div class="hero-focus-meta">
                <div class="meta-row">
                  <span>Hoàn thành</span>
                  <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
                </div>
                <div class="meta-row">
                  <span>Trạng thái</span>
                  <strong>${state.reviewMode === "submit" ? "Đã chấm" : state.reviewMode === "show" ? "Đáp án" : "Đang làm"}</strong>
                </div>
              </div>
            <div class="nav-row">
              <button class="nav-pill" data-action="prev-question" ${state.questionIndex === 0 ? "disabled" : ""}>Câu trước</button>
              <button class="nav-pill" data-action="next-question" ${state.questionIndex === module.questions.length - 1 ? "disabled" : ""}>Câu sau</button>
            </div>

            <div class="hero-focus-track"><span style="width: ${completion}%"></span></div>
          </div>
        </div>

        <div class="module-strip">
          ${renderModuleTabs(subject, module)}
        </div>
      </section>

      <section class="workspace-grid">
        <section class="workspace-main fade-up">
          <div class="workspace-banner">
            <div>
              <strong>Workspace luyện tập</strong>
              <div class="muted">Tự lưu tiến độ trên trình duyệt. Có thể làm từng phần rồi quay lại sau.</div>
            </div>
            <div class="shortcut-row">
              <span class="shortcut">← / → đổi câu</span>
              <span class="shortcut">Enter chấm nhanh</span>
              ${module.type === "mcq" ? '<span class="shortcut">1 2 3 4 chọn đáp án</span>' : ""}
            </div>
          </div>
      <aside class="quiz-side fade-up">
        <section class="side-section">
          <p class="side-title">Lịch sử câu hỏi</p>
          <div class="history-list">${renderHistoryChips(module, stats)}</div>
        </section>

          <div class="workspace-head">
            <div>
              <div class="page-tag">${module.partLabel}</div>
              <h3 class="page-title">${module.description}</h3>
            </div>
            <div class="counter">
              ${state.reviewMode === "idle" ? `${stats.answeredUnits}/${stats.totalUnits} đã làm` : `Đúng: ${stats.correctUnits}/${stats.totalUnits}`}
        <section class="side-section">
          <span class="side-badge">${module.badge}</span>
          <div class="side-meta">
            <div class="meta-row">
              <span>Đã làm</span>
              <strong>${stats.answeredUnits}/${stats.totalUnits}</strong>
            </div>
          </div>

          ${renderQuestionArea(module, answers)}

          <div class="question-footer">
            <div class="action-group">
              <button class="nav-button" data-action="prev-question" ${state.questionIndex === 0 ? "disabled" : ""}>Câu trước</button>
              <button class="nav-button" data-action="next-question" ${state.questionIndex === module.questions.length - 1 ? "disabled" : ""}>Câu sau</button>
            <div class="meta-row">
              <span>Phần hiện tại</span>
              <strong>${module.label}</strong>
            </div>
            <div class="action-group">
              <button class="primary-button" data-action="submit-module">Nộp bài</button>
              <button class="secondary-button" data-action="show-answers">Xem đáp án</button>
              <button class="ghost-button" data-action="reset-module">Làm lại</button>
            <div class="meta-row">
              <span>Tự lưu</span>
              <strong>Bật</strong>
            </div>
          </div>
          <p class="side-copy">Màn này giữ đúng kiểu một khung câu hỏi chính và một khung lịch sử nhỏ bên phải để đổi câu nhanh.</p>
        </section>

        <aside class="workspace-side">
          <section class="panel fade-up">
            <div class="history-head">
              <div class="panel-title">
                <strong>Tiến độ</strong>
                <span>Theo module hiện tại</span>
              </div>
              <span class="soft-pill">${module.shortLabel}</span>
            </div>
            ${renderProgressPanel(stats, module)}
          </section>

          <section class="panel fade-up">
            <div class="history-head">
              <div class="panel-title">
                <strong>Kết quả</strong>
                <span>${state.reviewMode === "submit" ? "Đã chấm điểm" : state.reviewMode === "show" ? "Đang xem đáp án" : "Chưa chấm"}</span>
              </div>
              <span class="soft-pill">${state.reviewMode === "idle" ? "Live" : "Review"}</span>
            </div>
            ${renderResultPanel(stats, module)}
          </section>

          <section class="panel fade-up">
            <div class="history-head">
              <div class="panel-title">
                <strong>Navigator</strong>
                <span>Nhảy nhanh tới từng câu</span>
              </div>
              <span class="soft-pill">${module.questions.length} câu</span>
            </div>
            <div class="history-list">${renderHistoryChips(module, stats)}</div>
            <div class="legend-row">
              <span class="chip">Xanh: đã làm</span>
              <span class="chip">Đỏ: sai</span>
              <span class="chip">Vàng: đáp án</span>
            </div>
            <p class="history-caption">Ô đang sáng là câu bạn đang đứng hiện tại.</p>
          </section>
        </aside>
      </section>
        <section class="side-section">
          <p class="side-title">Kết quả</p>
          ${renderResultBox(stats, module)}
        </section>
      </aside>
    </section>
  `;
}
    return;
  }

  renderSubjectView();
  if (state.view === "subject") {
    renderSubjectView();
    return;
  }

  renderQuizView();
}

function handleClick(event) {
    return;
  }

  const action = button.dataset.action;
  const { action } = button.dataset;

  if (action === "clear-progress") {
    clearAllProgress();
    return;
  }

  if (action === "open-subject") {
    openSubject(button.dataset.subjectId);
    return;
  }

  if (action === "go-home") {
    state.view = "home";
    resetReviewMode();
    renderApp();
    goHome();
    return;
  }

  if (action === "switch-module") {
    switchModule(button.dataset.moduleId);
  if (action === "open-module") {
    openModule(button.dataset.moduleId);
    return;
  }

  if (action === "go-subject") {
    goSubject();
    return;
  }

  if (action === "jump-question") {
    moveToQuestion(Number(button.dataset.questionIndex));
    return;
}

function handleKeyboard(event) {
  if (state.view !== "subject") {
  if (state.view !== "quiz") {
    return;
  }
