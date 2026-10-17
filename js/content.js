// Giáo trình Events gồm 12 bài, nội dung độc lập với giao diện.
export const lessons = [
  {
    "id": "11-1",
    "title": "Sự kiện là gì?",
    "subtitle": "Nhận biết sự kiện, EventTarget và thời điểm hàm xử lý được gọi",
    "scenario": "Một nút “Thêm sinh viên” không làm gì nếu chưa có JavaScript lắng nghe hành động của người dùng. Ta cần nối hành động với một hàm xử lý.",
    "theory": [
      [
        "Từ giao diện tĩnh đến sự kiện",
        "HTML tạo cấu trúc, CSS định dạng giao diện. Khi cần phản hồi hành động như nhấn nút, nhập chữ hoặc tải trang, JavaScript đăng ký hàm xử lý cho đối tượng có thể phát sự kiện (EventTarget). Sự kiện cũng có thể do chương trình phát bằng dispatchEvent(), không nhất thiết chỉ xuất phát từ thao tác người dùng."
      ],
      [
        "Mô hình sự kiện",
        "Sự kiện (event) là thông báo về một điều đã xảy ra: click, nhập chữ, thay đổi trường dữ liệu, tải tài liệu. Đối tượng Event cung cấp thông tin sự kiện; trình duyệt phát sự kiện tại đối tượng mục tiêu."
      ],
      [
        "Lắng nghe sự kiện",
        "element.addEventListener(type, listener) đăng ký hàm để chạy khi sự kiện tương ứng được phát. Listener được đăng ký; JavaScript không chạy callback ngay tại thời điểm đăng ký."
      ],
      [
        "Phân biệt khai báo và gọi hàm",
        "Đúng: addEventListener(\"click\", handler). Sai thường gặp: addEventListener(\"click\", handler()) vì handler() chạy ngay và giá trị trả về mới được truyền vào."
      ],
      [
        "DOMContentLoaded",
        "Khi dùng script trong head, defer hoặc lắng nghe DOMContentLoaded giúp đảm bảo DOM đã được phân tích. defer hoạt động với script ngoài, không có tác dụng với inline classic script."
      ]
    ],
    "example": {
      "html": "<button id=\"hello\">Chào tôi</button>\n<p id=\"msg\">Đang chờ...</p>",
      "js": "const btn = document.querySelector(\"#hello\");\nconst msg = document.querySelector(\"#msg\");\nbtn.addEventListener(\"click\", () => {\n  msg.textContent = \"Xin chào từ Event!\";\n});"
    },
    "steps": [
      "Trình duyệt tìm button và paragraph.",
      "addEventListener đăng ký một callback cho click.",
      "Khi người dùng click, callback sửa textContent của paragraph."
    ],
    "diagram": [
      "Đợi người dùng",
      "click được phát",
      "Callback chạy",
      "DOM thay đổi"
    ],
    "bugs": [
      {
        "bad": "button.addEventListener(\"click\", sayHello());",
        "why": "Bạn đã gọi hàm ngay khi đăng ký, không truyền hàm callback.",
        "fix": "button.addEventListener(\"click\", sayHello);"
      },
      {
        "bad": "const btn = document.querySelector(\"#absent\");\nbtn.addEventListener(\"click\", fn);",
        "why": "querySelector trả về null; không thể đăng ký listener trên null.",
        "fix": "Kiểm tra selector và thời điểm DOM được phân tích."
      }
    ],
    "summary": [
      "Event mô tả sự kiện đã xảy ra; addEventListener đăng ký callback.",
      "Sự kiện click khác với việc gọi trực tiếp một hàm.",
      "Hãy kiểm tra selector và thời điểm tải DOM khi listener không chạy."
    ],
    "quiz": {
      "q": "Khi nào hàm callback của addEventListener(\"click\", handler) thường chạy?",
      "options": [
        "Ngay khi gọi addEventListener",
        "Khi sự kiện click xảy ra",
        "Mỗi lần trang vẽ lại"
      ],
      "answer": 1,
      "why": "Callback được đăng ký và sẽ được gọi khi sự kiện tương ứng xảy ra."
    },
    "exercises": [
      {
        "id": "11-1-a",
        "title": "Bấm nút đếm số lần",
        "level": "Có hướng dẫn",
        "brief": "Nhấn nút làm nội dung #count tăng từ 0 lên 1, 2, 3...",
        "html": "<button id=\"inc\">Tăng</button><strong id=\"count\">0</strong>",
        "js": "let count = 0;\nconst btn = document.querySelector(\"#inc\");\nconst output = document.querySelector(\"#count\");\n// Đăng ký click listener và cập nhật output.",
        "checks": [
          {
            "type": "clickTimesText",
            "selector": "#inc",
            "target": "#count",
            "times": 3,
            "expected": "3",
            "label": "Ba click cho kết quả 3"
          }
        ],
        "hint": "Dùng addEventListener(\"click\", () => { count++; ... }).",
        "solution": "let count = 0;\nconst btn = document.querySelector(\"#inc\");\nconst output = document.querySelector(\"#count\");\nbtn.addEventListener(\"click\", () => { count++; output.textContent = String(count); });",
        "css": ""
      },
      {
        "id": "11-1-b",
        "title": "Thay đổi thông báo",
        "level": "Tự giải",
        "brief": "Khi click nút #ready, đoạn #status hiển thị “Đã sẵn sàng”.",
        "html": "<button id=\"ready\">Bắt đầu</button><p id=\"status\">Chưa sẵn sàng</p>",
        "js": "// Viết JavaScript tại đây.",
        "checks": [
          {
            "type": "clickText",
            "selector": "#ready",
            "target": "#status",
            "expected": "Đã sẵn sàng",
            "label": "Click đổi trạng thái"
          }
        ],
        "hint": "Sử dụng querySelector rồi addEventListener.",
        "solution": "document.querySelector(\"#ready\").addEventListener(\"click\", () => { document.querySelector(\"#status\").textContent = \"Đã sẵn sàng\"; });",
        "css": ""
      },
      {
        "id": "11-1-c",
        "title": "Thử thách và giải thích: Thay đổi thông báo",
        "level": "Nâng cao",
        "brief": "Khi click nút #ready, đoạn #status hiển thị “Đã sẵn sàng”. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<button id=\"ready\">Bắt đầu</button><p id=\"status\">Chưa sẵn sàng</p>",
        "js": "// Viết JavaScript tại đây.",
        "checks": [
          {
            "type": "clickText",
            "selector": "#ready",
            "target": "#status",
            "expected": "Đã sẵn sàng",
            "label": "Click đổi trạng thái"
          }
        ],
        "hint": "Sử dụng querySelector rồi addEventListener.",
        "solution": "document.querySelector(\"#ready\").addEventListener(\"click\", () => { document.querySelector(\"#status\").textContent = \"Đã sẵn sàng\"; });",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-2",
    "title": "Ba cách xử lý sự kiện",
    "subtitle": "HTML event attributes, DOM properties và addEventListener()",
    "scenario": "Một nút “Đổi màu” có thể được lập trình ngay trong HTML hoặc được gắn hàm xử lý từ JavaScript. Ba cách đó giống và khác nhau ở đâu? Hãy thử cùng một yêu cầu trước khi chọn cách phù hợp.",
    "theory": [
      [
        "Cách 1 — Thuộc tính sự kiện trong HTML",
        "Có thể viết <button onclick=\"changeColor()\">Đổi màu</button>. Nội dung thuộc tính onclick là mã JavaScript được sử dụng khi sự kiện click xảy ra. Các thuộc tính tương tự gồm oninput, onchange, onmouseover và onkeydown. Đây là cú pháp hợp lệ, nhưng trộn cấu trúc HTML với logic và thường không được khuyến nghị cho ứng dụng mới."
      ],
      [
        "Cách 2 — Thuộc tính xử lý sự kiện trên DOM",
        "Lấy phần tử rồi gán button.onclick = changeColor. Khi gán, ta truyền tham chiếu hàm chứ không gọi nó. Viết button.onclick = changeColor() sẽ gọi hàm ngay lúc gán và lấy giá trị trả về làm handler. Mỗi thuộc tính onclick chứa một handler hiện hành; phép gán tiếp theo ghi đè phép gán trước."
      ],
      [
        "Cách 3 — addEventListener()",
        "button.addEventListener(\"click\", changeColor) đăng ký một listener. Có thể thêm nhiều listener khác nhau cho cùng một loại sự kiện và dùng các tùy chọn như once, capture hoặc signal. Đây thường là lựa chọn nên ưu tiên."
      ],
      [
        "So sánh và nguyên tắc chọn",
        "Cả ba cách đều có thể phản hồi click. Học HTML attributes để đọc và hiểu source có sẵn, DOM properties cho thao tác đơn giản, còn addEventListener() khi xây dựng code dễ mở rộng, có nhiều listener hoặc cần quản lý vòng đời. Không đặt tên sự kiện có tiền tố on trong addEventListener: viết \"click\", không viết \"onclick\"."
      ]
    ],
    "example": {
      "html": "<button id=\"color\" onclick=\"window.changeColor()\">Đổi màu</button>\n<p id=\"result\" style=\"padding:12px;background:#e2e8f0\">Chưa bấm</p>",
      "js": "window.changeColor = function () {\n  const box = document.querySelector(\"#result\");\n  box.textContent = \"Đã đổi màu bằng onclick\";\n  box.style.backgroundColor = \"#bfdbfe\";\n};\n// Thử thay onclick HTML bằng:\n// document.querySelector(\"#color\").onclick = window.changeColor;\n// hoặc addEventListener(\"click\", window.changeColor)"
    },
    "steps": [
      "Nhận diện nút và đoạn văn cần thay đổi.",
      "HTML thuộc tính onclick yêu cầu gọi hàm changeColor khi click xảy ra.",
      "Hàm đổi nội dung và màu nền. Thử xóa thuộc tính onclick và đăng ký lại bằng JavaScript để so sánh."
    ],
    "diagram": [
      "Người dùng kích hoạt nút",
      "Phân phối click",
      "Hàm xử lý được gọi",
      "Cập nhật DOM"
    ],
    "bugs": [
      {
        "bad": "button.onclick = changeColor();",
        "why": "Hàm chạy ngay lúc gán. Nếu trả về undefined, nút sẽ không giữ được handler như mong đợi.",
        "fix": "Dùng button.onclick = changeColor hoặc addEventListener(\"click\", changeColor)."
      },
      {
        "bad": "button.addEventListener(\"onclick\", changeColor);",
        "why": "Tên sự kiện trong addEventListener không có tiền tố on.",
        "fix": "Thay \"onclick\" bằng \"click\"."
      }
    ],
    "summary": [
      "HTML onclick hợp lệ nhưng không nên lạm dụng vì trộn JavaScript vào HTML.",
      "Gán .onclick = handler sẽ thay thế handler trước đó trong thuộc tính này.",
      "addEventListener(\"click\", handler) giúp quản lý nhiều listener, có các tùy chọn quản lý."
    ],
    "quiz": {
      "q": "Cách nào đăng ký được hai listener khác nhau cho cùng một nút mà không ghi đè nhau?",
      "options": [
        "Hai phép gán .onclick liên tiếp",
        "Hai lần gọi addEventListener với hai hàm khác nhau",
        "Viết onclick=\"a();\" rồi viết thêm onclick=\"b();\""
      ],
      "answer": 1,
      "why": "addEventListener cho phép đăng ký nhiều listener khác nhau cùng loại trên một EventTarget."
    },
    "exercises": [
      {
        "id": "11-2-a",
        "title": "HTML onclick",
        "level": "Có hướng dẫn",
        "brief": "Nhấn #hello khiến #out hiển thị “Xin chào”. Khai báo hàm toàn cục sayHello và gọi từ thuộc tính HTML onclick.",
        "html": "<button id=\"hello\" onclick=\"sayHello()\">Chào</button><p id=\"out\">Chưa nhấn</p>",
        "js": "// Khai báo window.sayHello hoặc function sayHello() tại đây",
        "checks": [
          {
            "type": "clickText",
            "selector": "#hello",
            "target": "#out",
            "expected": "Xin chào",
            "label": "onclick thay đổi nội dung"
          }
        ],
        "hint": "Hàm phải được truy cập bởi inline handler, ví dụ window.sayHello = function () { ... }.",
        "solution": "window.sayHello = () => { document.querySelector(\"#out\").textContent = \"Xin chào\"; };",
        "css": ""
      },
      {
        "id": "11-2-b",
        "title": "Gán DOM property",
        "level": "Tự giải",
        "brief": "Khi click #send, #out hiển thị “Đã gửi”. Dùng button.onclick từ JavaScript.",
        "html": "<button id=\"send\">Gửi</button><p id=\"out\">...</p>",
        "js": "// Gán handler cho thuộc tính onclick",
        "checks": [
          {
            "type": "clickText",
            "selector": "#send",
            "target": "#out",
            "expected": "Đã gửi",
            "label": "DOM property onclick hoạt động"
          }
        ],
        "hint": "Dùng document.querySelector(\"#send\").onclick = function () { ... }.",
        "solution": "document.querySelector(\"#send\").onclick = () => {document.querySelector(\"#out\").textContent = \"Đã gửi\"};",
        "css": ""
      },
      {
        "id": "11-2-c",
        "title": "Hai listener trên một nút",
        "level": "Nâng cao",
        "brief": "Khi nhấn #go, cập nhật #count thành “1” và #status thành “Hoàn tất” bằng hai listener khác nhau.",
        "html": "<button id=\"go\">Thực hiện</button><p id=\"count\">0</p><p id=\"status\">Chờ</p>",
        "js": "// Đăng ký hai callback khác nhau",
        "checks": [
          {
            "type": "clickText",
            "selector": "#go",
            "target": "#count",
            "expected": "1",
            "label": "Listener thứ nhất cập nhật count"
          },
          {
            "type": "clickText",
            "selector": "#go",
            "target": "#status",
            "expected": "Hoàn tất",
            "label": "Listener thứ hai cập nhật status"
          }
        ],
        "hint": "Đăng ký hai hàm bằng addEventListener(\"click\", ...).",
        "solution": "const b=document.querySelector(\"#go\"); b.addEventListener(\"click\",()=>document.querySelector(\"#count\").textContent=\"1\"); b.addEventListener(\"click\",()=>document.querySelector(\"#status\").textContent=\"Hoàn tất\");",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-3",
    "title": "Quản lý Event Listeners",
    "subtitle": "Đăng ký, hủy và quản lý nhiều listener",
    "scenario": "Một nút có thể vừa ghi log vừa thay đổi giao diện. Khi không cần lắng nghe nữa, ứng dụng cần hủy listener đúng cách.",
    "theory": [
      [
        "Cú pháp",
        "target.addEventListener(type, callback, options) nhận tên sự kiện, callback và tùy chọn. Các tùy chọn thường dùng: once, capture, passive, signal."
      ],
      [
        "removeEventListener",
        "Để hủy listener, cần đúng đối tượng, tên sự kiện, cùng tham chiếu callback và giá trị capture tương ứng. Hàm mũi tên được tạo mới không có cùng tham chiếu."
      ],
      [
        "once: true",
        "Listener chỉ được gọi tối đa một lần, sau đó tự được gỡ."
      ],
      [
        "AbortController",
        "Có thể truyền {signal: controller.signal}; gọi controller.abort() để hủy các listener gắn với signal."
      ]
    ],
    "example": {
      "html": "<button id=\"once\">Chỉ chạy một lần</button><p id=\"status\">Chưa bấm</p>",
      "js": "const btn = document.querySelector(\"#once\");\nconst status = document.querySelector(\"#status\");\nbtn.addEventListener(\"click\", () => {\n  status.textContent = \"Đã xử lý một lần\";\n  console.log(\"Click đầu tiên\");\n}, { once: true });"
    },
    "steps": [
      "Listener được đăng ký kèm tùy chọn once.",
      "Click đầu tiên thực thi callback và gỡ listener.",
      "Các click sau không còn kích hoạt callback này."
    ],
    "diagram": [
      "Register",
      "click lần một",
      "Callback",
      "Tự gỡ listener"
    ],
    "bugs": [
      {
        "bad": "btn.addEventListener(\"click\", () => log());\nbtn.removeEventListener(\"click\", () => log());",
        "why": "Hai arrow function là hai object khác nhau nên không gỡ được listener.",
        "fix": "Dùng function handler() { log(); } rồi truyền handler vào cả hai lần."
      }
    ],
    "summary": [
      "Giữ tham chiếu callback nếu cần removeEventListener.",
      "{once:true} cho listener một lần.",
      "AbortController quản lý vòng đời nhiều listener thuận tiện."
    ],
    "quiz": {
      "q": "Vì sao removeEventListener với arrow function mới không gỡ listener đã thêm?",
      "options": [
        "Vì thiếu preventDefault",
        "Vì hai hàm khác tham chiếu",
        "Vì cần dùng innerHTML"
      ],
      "answer": 1,
      "why": "removeEventListener cần đúng cùng đối tượng hàm đã đăng ký."
    },
    "exercises": [
      {
        "id": "11-3-a",
        "title": "Chỉ chấp nhận một click",
        "level": "Có hướng dẫn",
        "brief": "Nút #confirm chỉ tăng #count một lần dù bấm nhiều lần.",
        "html": "<button id=\"confirm\">Xác nhận</button><span id=\"count\">0</span>",
        "js": "let count = 0;\n// Hãy dùng option once: true",
        "checks": [
          {
            "type": "clickTimesText",
            "selector": "#confirm",
            "target": "#count",
            "times": 3,
            "expected": "1",
            "label": "Ba lần click nhưng chỉ cộng một"
          }
        ],
        "hint": "Truyền {once:true} vào đối số thứ ba.",
        "solution": "let count = 0; document.querySelector(\"#confirm\").addEventListener(\"click\",()=>{document.querySelector(\"#count\").textContent=String(++count)}, {once:true});",
        "css": ""
      },
      {
        "id": "11-3-b",
        "title": "Dừng lắng nghe",
        "level": "Tự giải",
        "brief": "Bấm nút #stop thì nút #inc không còn tăng số đếm.",
        "html": "<button id=\"inc\">Tăng</button><button id=\"stop\">Dừng</button><span id=\"count\">0</span>",
        "js": "// Dùng callback có tên để có thể gỡ",
        "checks": [
          {
            "type": "sequence",
            "steps": [
              {
                "event": "click",
                "selector": "#inc"
              },
              {
                "event": "click",
                "selector": "#stop"
              },
              {
                "event": "click",
                "selector": "#inc"
              }
            ],
            "target": "#count",
            "expected": "1",
            "label": "Ngừng tăng sau khi nhấn Dừng"
          }
        ],
        "hint": "Viết một function increment rồi dùng removeEventListener.",
        "solution": "const inc=document.querySelector(\"#inc\"); const out=document.querySelector(\"#count\"); let n=0; function increase(){out.textContent=String(++n)} inc.addEventListener(\"click\",increase); document.querySelector(\"#stop\").addEventListener(\"click\",()=>inc.removeEventListener(\"click\",increase));",
        "css": ""
      },
      {
        "id": "11-3-c",
        "title": "Thử thách và giải thích: Dừng lắng nghe",
        "level": "Nâng cao",
        "brief": "Bấm nút #stop thì nút #inc không còn tăng số đếm. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<button id=\"inc\">Tăng</button><button id=\"stop\">Dừng</button><span id=\"count\">0</span>",
        "js": "// Dùng callback có tên để có thể gỡ",
        "checks": [
          {
            "type": "sequence",
            "steps": [
              {
                "event": "click",
                "selector": "#inc"
              },
              {
                "event": "click",
                "selector": "#stop"
              },
              {
                "event": "click",
                "selector": "#inc"
              }
            ],
            "target": "#count",
            "expected": "1",
            "label": "Ngừng tăng sau khi nhấn Dừng"
          }
        ],
        "hint": "Viết một function increment rồi dùng removeEventListener.",
        "solution": "const inc=document.querySelector(\"#inc\"); const out=document.querySelector(\"#count\"); let n=0; function increase(){out.textContent=String(++n)} inc.addEventListener(\"click\",increase); document.querySelector(\"#stop\").addEventListener(\"click\",()=>inc.removeEventListener(\"click\",increase));",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-4",
    "title": "Event Object và this",
    "subtitle": "target, currentTarget và thông tin sự kiện",
    "scenario": "Bạn click vào một biểu tượng nằm trong nút. Làm sao biết chính xác phần tử nhận sự kiện và phần tử được gắn listener?",
    "theory": [
      [
        "Event object",
        "Callback nhận đối tượng event được trình duyệt cung cấp; event.type là tên loại sự kiện, event.timeStamp là mốc thời gian."
      ],
      [
        "event.target",
        "Phần tử ban đầu được nhắm tới (có thể là node con của nơi gắn listener)."
      ],
      [
        "event.currentTarget",
        "Phần tử đang xử lý listener hiện tại. Chỉ nên đọc bên trong callback đồng bộ; sau callback nó có thể trở thành null."
      ],
      [
        "event.target và security",
        "Kiểm tra instanceof Element hoặc dùng closest() khi event có thể phát từ nhiều node con."
      ],
      [
        "this trong listener",
        "Trong hàm function thông thường được gọi làm listener bởi addEventListener, this là currentTarget. Arrow function không có this riêng mà lấy từ phạm vi bên ngoài. Luôn có thể sử dụng event.currentTarget cho rõ ràng."
      ]
    ],
    "example": {
      "html": "<button id=\"send\"><span>📨</span> Gửi</button><p id=\"result\"></p>",
      "js": "const btn = document.querySelector(\"#send\");\nbtn.addEventListener(\"click\", (event) => {\n  document.querySelector(\"#result\").textContent =\n    `type=${event.type}; currentTarget=${event.currentTarget.tagName}`;\n});"
    },
    "steps": [
      "Nhấp nút hoặc span bên trong nút.",
      "event.target phụ thuộc nơi click thực tế.",
      "event.currentTarget luôn là button vì listener được gắn lên button."
    ],
    "diagram": [
      "Click vào span",
      "event.target = span",
      "Bubble lên button",
      "currentTarget = button"
    ],
    "bugs": [
      {
        "bad": "button.addEventListener(\"click\", (event) => {\n setTimeout(() => console.log(event.currentTarget), 100);\n});",
        "why": "currentTarget chỉ được bảo đảm trong quá trình listener đang thực thi.",
        "fix": "const current = event.currentTarget; lưu trước khi thực hiện xử lý bất đồng bộ."
      }
    ],
    "summary": [
      "target chỉ phần tử phát sinh sự kiện ban đầu; currentTarget là phần tử đang thực hiện callback.",
      "type, key và các property phụ thuộc loại event."
    ],
    "quiz": {
      "q": "Listener đặt trên button nhưng click span bên trong; currentTarget là gì?",
      "options": [
        "span",
        "button",
        "document"
      ],
      "answer": 1,
      "why": "currentTarget là node đang chạy listener; target có thể là node con."
    },
    "exercises": [
      {
        "id": "11-4-a",
        "title": "Hiển thị loại sự kiện",
        "level": "Có hướng dẫn",
        "brief": "Khi click #info, hiển thị event.type trong #result.",
        "html": "<button id=\"info\"><span>Thông tin</span></button><p id=\"result\">...</p>",
        "js": "// Sử dụng tham số event trong callback",
        "checks": [
          {
            "type": "clickText",
            "selector": "#info",
            "target": "#result",
            "expected": "click",
            "label": "Hiển thị event.type"
          }
        ],
        "hint": "event.type trả về \"click\".",
        "solution": "document.querySelector(\"#info\").addEventListener(\"click\", e=>document.querySelector(\"#result\").textContent=e.type);",
        "css": ""
      },
      {
        "id": "11-4-b",
        "title": "Đọc currentTarget",
        "level": "Tự giải",
        "brief": "Khi click button, in tagName của currentTarget vào #result (BUTTON).",
        "html": "<button id=\"info\"><span>Thông tin</span></button><p id=\"result\"></p>",
        "js": "// Viết mã",
        "checks": [
          {
            "type": "clickText",
            "selector": "#info",
            "target": "#result",
            "expected": "BUTTON",
            "label": "Lấy tagName của currentTarget"
          }
        ],
        "hint": "currentTarget.tagName viết hoa tên thẻ HTML.",
        "solution": "document.querySelector(\"#info\").addEventListener(\"click\", e=>document.querySelector(\"#result\").textContent=e.currentTarget.tagName);",
        "css": ""
      },
      {
        "id": "11-4-c",
        "title": "Thử thách và giải thích: Đọc currentTarget",
        "level": "Nâng cao",
        "brief": "Khi click button, in tagName của currentTarget vào #result (BUTTON). Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<button id=\"info\"><span>Thông tin</span></button><p id=\"result\"></p>",
        "js": "// Viết mã",
        "checks": [
          {
            "type": "clickText",
            "selector": "#info",
            "target": "#result",
            "expected": "BUTTON",
            "label": "Lấy tagName của currentTarget"
          }
        ],
        "hint": "currentTarget.tagName viết hoa tên thẻ HTML.",
        "solution": "document.querySelector(\"#info\").addEventListener(\"click\", e=>document.querySelector(\"#result\").textContent=e.currentTarget.tagName);",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-5",
    "title": "Mouse và Pointer Events",
    "subtitle": "Click, dblclick, pointerdown và chuyển động con trỏ",
    "scenario": "Một bảng vẽ đơn giản phải biết khi nào người dùng đặt bút/chuột xuống, di chuyển và thả ra.",
    "theory": [
      [
        "Click và dblclick",
        "click dùng cho thao tác kích hoạt; dblclick thường phát sau các sự kiện click. Tránh phụ thuộc vào dblclick như con đường duy nhất tới chức năng."
      ],
      [
        "Pointer Events",
        "pointerdown, pointermove, pointerup thống nhất chuột, cảm ứng và bút. Event có clientX/clientY, pointerId và pointerType."
      ],
      [
        "Tọa độ",
        "clientX/clientY tính theo viewport. Muốn tính vị trí trong phần tử dùng getBoundingClientRect()."
      ],
      [
        "Pointer capture",
        "setPointerCapture(pointerId) giúp một phần tử tiếp tục nhận event của con trỏ đang được kéo (khi phù hợp)."
      ],
      [
        "mouseenter và mouseover",
        "mouseover có thể phát lại khi con trỏ đi qua phần tử con và thường nổi bọt; mouseenter không nổi bọt và thích hợp để theo dõi việc con trỏ đi vào một vùng. Các cặp mouseleave/mouseout có khác biệt tương ứng."
      ],
      [
        "contextmenu và mousedown",
        "contextmenu thường phát khi yêu cầu menu ngữ cảnh; mousedown/up khi nhấn/thả nút chuột. Không nên đánh đồng click với mousedown vì click là thao tác kích hoạt ở mức cao hơn."
      ]
    ],
    "example": {
      "html": "<div id=\"pad\" style=\"padding:32px;border:2px dashed #64748b\">Di chuột ở đây</div><p id=\"position\">Chưa di chuyển</p>",
      "js": "const pad = document.querySelector(\"#pad\");\npad.addEventListener(\"pointermove\", (e) => {\n  document.querySelector(\"#position\").textContent =\n    `${Math.round(e.clientX)}, ${Math.round(e.clientY)}`;\n});"
    },
    "steps": [
      "pointermove phát khi thiết bị trỏ di chuyển trên vùng theo dõi.",
      "clientX và clientY biểu diễn tọa độ trên viewport.",
      "Viết hai tọa độ ra giao diện bằng textContent."
    ],
    "diagram": [
      "pointerdown",
      "pointermove",
      "pointerup",
      "Kết thúc thao tác"
    ],
    "bugs": [
      {
        "bad": "pad.addEventListener(\"pointermove\", e => {\n console.log(e.offsetX, e.offsetY);\n});",
        "why": "offsetX/offsetY có thể phụ thuộc target bên trong nên khó ổn định trong vùng có con.",
        "fix": "Dùng clientX/clientY trừ rect.left/top khi cần tọa độ tương đối container."
      }
    ],
    "summary": [
      "Pointer Events phù hợp đa loại thiết bị trỏ.",
      "Nên dùng clientX/clientY kết hợp bounding rect khi cần tọa độ cục bộ."
    ],
    "quiz": {
      "q": "clientX và clientY được tính tương đối với đâu?",
      "options": [
        "Viewport",
        "Document luôn luôn",
        "Phần tử cha"
      ],
      "answer": 0,
      "why": "clientX/Y tương đối với vùng nhìn (viewport)."
    },
    "exercises": [
      {
        "id": "11-5-a",
        "title": "Ghi tọa độ click",
        "level": "Có hướng dẫn",
        "brief": "Khi click nút #place, #out hiển thị “Đã click”.",
        "html": "<button id=\"place\">Đánh dấu</button><p id=\"out\"></p>",
        "js": "// Lắng nghe click trên #place",
        "checks": [
          {
            "type": "clickText",
            "selector": "#place",
            "target": "#out",
            "expected": "Đã click",
            "label": "Click tạo thông báo"
          }
        ],
        "hint": "Sử dụng click callback và textContent.",
        "solution": "document.querySelector(\"#place\").addEventListener(\"click\",()=>document.querySelector(\"#out\").textContent=\"Đã click\");",
        "css": ""
      },
      {
        "id": "11-5-b",
        "title": "Nhận pointerdown",
        "level": "Tự giải",
        "brief": "Khi pointerdown trên #pad, đổi text #out thành “Đang nhấn”.",
        "html": "<div id=\"pad\" style=\"padding:30px;background:#dbeafe\">Chạm hoặc click</div><p id=\"out\"></p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "dispatch",
            "selector": "#pad",
            "event": "pointerdown",
            "target": "#out",
            "expected": "Đang nhấn",
            "label": "Pointerdown thay đổi trạng thái"
          }
        ],
        "hint": "addEventListener(\"pointerdown\",...).",
        "solution": "document.querySelector(\"#pad\").addEventListener(\"pointerdown\",()=>document.querySelector(\"#out\").textContent=\"Đang nhấn\");",
        "css": ""
      },
      {
        "id": "11-5-c",
        "title": "Thử thách và giải thích: Nhận pointerdown",
        "level": "Nâng cao",
        "brief": "Khi pointerdown trên #pad, đổi text #out thành “Đang nhấn”. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<div id=\"pad\" style=\"padding:30px;background:#dbeafe\">Chạm hoặc click</div><p id=\"out\"></p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "dispatch",
            "selector": "#pad",
            "event": "pointerdown",
            "target": "#out",
            "expected": "Đang nhấn",
            "label": "Pointerdown thay đổi trạng thái"
          }
        ],
        "hint": "addEventListener(\"pointerdown\",...).",
        "solution": "document.querySelector(\"#pad\").addEventListener(\"pointerdown\",()=>document.querySelector(\"#out\").textContent=\"Đang nhấn\");",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-6",
    "title": "Keyboard Events",
    "subtitle": "keydown, keyup, event.key và phím tắt",
    "scenario": "Một thanh tìm kiếm cho phép nhấn Enter để áp dụng bộ lọc; Esc để hủy thao tác.",
    "theory": [
      [
        "keydown và keyup",
        "keydown phát khi phím được nhấn xuống, keyup khi nhả. Giữ phím có thể gây nhiều keydown với repeat=true."
      ],
      [
        "event.key",
        "Đọc ký tự hoặc tên phím mang ý nghĩa người dùng: Enter, Escape, ArrowDown… Phân biệt với event.code (vị trí phím vật lý)."
      ],
      [
        "Tổ hợp phím",
        "Kiểm tra event.ctrlKey, metaKey, shiftKey, altKey. Tránh chiếm phím tắt trình duyệt nếu không cần thiết."
      ],
      [
        "Accessibility",
        "Không dùng keydown cho mọi trường hợp: button mặc định đã hỗ trợ Enter/Space; giữ hành vi native khi có thể."
      ],
      [
        "Phím tổ hợp và repeat",
        "event.ctrlKey, altKey, shiftKey, metaKey thể hiện phím bổ trợ; event.repeat cho biết keydown đang lặp do giữ phím. key mô tả ý nghĩa ký tự/phím; code mô tả vị trí vật lý."
      ]
    ],
    "example": {
      "html": "<input id=\"search\" placeholder=\"Nhập rồi nhấn Enter\"><p id=\"result\">Chờ nhập</p>",
      "js": "const search = document.querySelector(\"#search\");\nsearch.addEventListener(\"keydown\", e => {\n  if (e.key === \"Enter\") {\n    document.querySelector(\"#result\").textContent = search.value;\n  }\n});"
    },
    "steps": [
      "Người dùng gõ nội dung vào input.",
      "keydown với event.key === \"Enter\" được phát.",
      "Callback lấy value và đưa sang kết quả."
    ],
    "diagram": [
      "Input có focus",
      "keydown Enter",
      "Kiểm tra key",
      "Cập nhật kết quả"
    ],
    "bugs": [
      {
        "bad": "if (e.key === \"enter\") { ... }",
        "why": "Giá trị tên phím phân biệt hoa thường; tên chuẩn là \"Enter\".",
        "fix": "if (e.key === \"Enter\") { ... }"
      }
    ],
    "summary": [
      "Sử dụng event.key cho hành vi gắn với ý nghĩa phím.",
      "keydown có thể lặp khi giữ phím."
    ],
    "quiz": {
      "q": "Tên event.key thường dùng để phát hiện Enter là gì?",
      "options": [
        "enter",
        "Enter",
        "ReturnKey"
      ],
      "answer": 1,
      "why": "KeyboardEvent.key dùng \"Enter\"."
    },
    "exercises": [
      {
        "id": "11-6-a",
        "title": "Enter để xác nhận",
        "level": "Có hướng dẫn",
        "brief": "Nhập tên vào #name; nhấn Enter để hiển thị tên trong #out.",
        "html": "<input id=\"name\" placeholder=\"Họ tên\"><p id=\"out\">...</p>",
        "js": "// Lắng nghe keydown trong input",
        "checks": [
          {
            "type": "inputKey",
            "selector": "#name",
            "value": "Minh",
            "key": "Enter",
            "target": "#out",
            "expected": "Minh",
            "label": "Enter hiển thị tên"
          }
        ],
        "hint": "Kiểm tra e.key === \"Enter\".",
        "solution": "const el=document.querySelector(\"#name\"); el.addEventListener(\"keydown\",e=>{if(e.key===\"Enter\")document.querySelector(\"#out\").textContent=el.value;});",
        "css": ""
      },
      {
        "id": "11-6-b",
        "title": "Escape để xóa",
        "level": "Tự giải",
        "brief": "Nhấn Escape trong ô #name làm giá trị của ô trở thành chuỗi rỗng.",
        "html": "<input id=\"name\" value=\"Dữ liệu cũ\">",
        "js": "// Viết code",
        "checks": [
          {
            "type": "inputKeyValue",
            "selector": "#name",
            "value": "Test",
            "key": "Escape",
            "expected": "",
            "label": "Escape xóa nội dung input"
          }
        ],
        "hint": "Trong callback đặt input.value = \"\".",
        "solution": "const input=document.querySelector(\"#name\"); input.addEventListener(\"keydown\",e=>{if(e.key===\"Escape\")input.value=\"\";});",
        "css": ""
      },
      {
        "id": "11-6-c",
        "title": "Thử thách và giải thích: Escape để xóa",
        "level": "Nâng cao",
        "brief": "Nhấn Escape trong ô #name làm giá trị của ô trở thành chuỗi rỗng. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<input id=\"name\" value=\"Dữ liệu cũ\">",
        "js": "// Viết code",
        "checks": [
          {
            "type": "inputKeyValue",
            "selector": "#name",
            "value": "Test",
            "key": "Escape",
            "expected": "",
            "label": "Escape xóa nội dung input"
          }
        ],
        "hint": "Trong callback đặt input.value = \"\".",
        "solution": "const input=document.querySelector(\"#name\"); input.addEventListener(\"keydown\",e=>{if(e.key===\"Escape\")input.value=\"\";});",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-7",
    "title": "Input, Change và Focus",
    "subtitle": "Phản hồi khi nhập, khi cam kết giá trị và khi focus",
    "scenario": "Form tìm kiếm nên lọc ngay khi gõ, còn trường lựa chọn có thể xử lý khi giá trị được người dùng xác nhận.",
    "theory": [
      [
        "input",
        "Phát khi giá trị thay đổi do thao tác người dùng (tùy loại control); phù hợp tìm kiếm tức thì. Việc gán input.value bằng JS không tự phát input event."
      ],
      [
        "change",
        "Đối với trường văn bản thường phát khi người dùng thay đổi và xác nhận (thường sau blur); đối với select/checkbox phát theo hành vi chọn."
      ],
      [
        "focus và blur",
        "focus/blur không bubble theo cách thông thường; focusin/focusout có bubble."
      ],
      [
        "Đọc value và checked",
        "Input văn bản đọc value, checkbox đọc checked; đừng nhầm thuộc tính HTML ban đầu và trạng thái property hiện tại."
      ],
      [
        "Input và change không giống nhau",
        "input thường phát khi giá trị thay đổi do người dùng; change được phát khi giá trị đã được cam kết theo quy tắc của từng control. Gán element.value bằng JavaScript không tự động phát input/change."
      ],
      [
        "focus, blur và bubbling",
        "focus/blur không nổi bọt theo cách thông thường; focusin/focusout có nổi bọt nên thuận tiện để dùng trên container."
      ]
    ],
    "example": {
      "html": "<input id=\"query\" placeholder=\"Tìm kiếm...\"><p id=\"out\">Bạn chưa nhập</p>",
      "js": "const query = document.querySelector(\"#query\");\nquery.addEventListener(\"input\", () => {\n  document.querySelector(\"#out\").textContent =\n    query.value || \"Bạn chưa nhập\";\n});"
    },
    "steps": [
      "Người dùng gõ ký tự.",
      "input event được phát sau thay đổi giá trị.",
      "value hiện tại được hiển thị trực tiếp."
    ],
    "diagram": [
      "Người dùng gõ",
      "input event",
      "Đọc value",
      "Render kết quả"
    ],
    "bugs": [
      {
        "bad": "input.value = \"Test\"; // rồi đợi listener input chạy",
        "why": "Gán value theo lập trình không tự tạo sự kiện input.",
        "fix": "Nếu muốn phát event theo chủ đích, dùng dispatchEvent(new Event(\"input\", {bubbles:true})) hoặc gọi hàm cập nhật trực tiếp."
      }
    ],
    "summary": [
      "input thích hợp cập nhật liên tục; change dành cho hành vi cam kết giá trị.",
      "focus và blur có đặc tính truyền sự kiện khác focusin/focusout."
    ],
    "quiz": {
      "q": "Gán input.value bằng JavaScript có tự động phát sự kiện input không?",
      "options": [
        "Có, luôn luôn",
        "Không",
        "Chỉ với textarea"
      ],
      "answer": 1,
      "why": "Thay đổi bằng script không tự động tạo input event."
    },
    "exercises": [
      {
        "id": "11-7-a",
        "title": "Live search text",
        "level": "Có hướng dẫn",
        "brief": "Khi thay đổi giá trị #query bằng thao tác nhập, #out hiển thị chính giá trị đó.",
        "html": "<input id=\"query\"><p id=\"out\"></p>",
        "js": "// Lắng nghe sự kiện input",
        "checks": [
          {
            "type": "inputText",
            "selector": "#query",
            "value": "DOM",
            "target": "#out",
            "expected": "DOM",
            "label": "Hiển thị tức thì nội dung đã nhập"
          }
        ],
        "hint": "Đọc query.value trong callback input.",
        "solution": "const q=document.querySelector(\"#query\");q.addEventListener(\"input\",()=>document.querySelector(\"#out\").textContent=q.value);",
        "css": ""
      },
      {
        "id": "11-7-b",
        "title": "Trạng thái checkbox",
        "level": "Tự giải",
        "brief": "Khi checkbox #agree được chọn, #status hiện “Đồng ý”; khi bỏ chọn hiện “Chưa đồng ý”.",
        "html": "<label><input id=\"agree\" type=\"checkbox\"> Tôi đồng ý</label><p id=\"status\">Chưa đồng ý</p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "checkboxChange",
            "selector": "#agree",
            "checked": true,
            "target": "#status",
            "expected": "Đồng ý",
            "label": "Checkbox checked=true"
          },
          {
            "type": "checkboxChange",
            "selector": "#agree",
            "checked": false,
            "target": "#status",
            "expected": "Chưa đồng ý",
            "label": "Checkbox checked=false"
          }
        ],
        "hint": "Dùng change và checkbox.checked.",
        "solution": "const a=document.querySelector(\"#agree\");a.addEventListener(\"change\",()=>document.querySelector(\"#status\").textContent=a.checked?\"Đồng ý\":\"Chưa đồng ý\");",
        "css": ""
      },
      {
        "id": "11-7-c",
        "title": "Thử thách và giải thích: Trạng thái checkbox",
        "level": "Nâng cao",
        "brief": "Khi checkbox #agree được chọn, #status hiện “Đồng ý”; khi bỏ chọn hiện “Chưa đồng ý”. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<label><input id=\"agree\" type=\"checkbox\"> Tôi đồng ý</label><p id=\"status\">Chưa đồng ý</p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "checkboxChange",
            "selector": "#agree",
            "checked": true,
            "target": "#status",
            "expected": "Đồng ý",
            "label": "Checkbox checked=true"
          },
          {
            "type": "checkboxChange",
            "selector": "#agree",
            "checked": false,
            "target": "#status",
            "expected": "Chưa đồng ý",
            "label": "Checkbox checked=false"
          }
        ],
        "hint": "Dùng change và checkbox.checked.",
        "solution": "const a=document.querySelector(\"#agree\");a.addEventListener(\"change\",()=>document.querySelector(\"#status\").textContent=a.checked?\"Đồng ý\":\"Chưa đồng ý\");",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-8",
    "title": "Event Propagation",
    "subtitle": "Capturing, bubbling và stopPropagation",
    "scenario": "Một thẻ card chứa nút “Xóa”. Khi click nút, listener của card cũng có thể chạy vì sự kiện di chuyển qua cây DOM.",
    "theory": [
      [
        "Ba giai đoạn",
        "Sự kiện có thể đi qua capturing → target → bubbling (nếu bubbles=true). Một số sự kiện không bubble."
      ],
      [
        "capture option",
        "addEventListener(type, handler, {capture:true}) nghe trong capturing thay vì bubbling; thứ tự phụ thuộc vị trí và giai đoạn."
      ],
      [
        "stopPropagation",
        "Ngừng truyền sự kiện tới các node tiếp theo; không ngăn hành vi mặc định và không chặn các listener khác trên cùng node."
      ],
      [
        "stopImmediatePropagation",
        "Ngăn listener tiếp theo trên cùng node và dừng propagation. Dùng thận trọng vì có thể làm code khác không chạy."
      ],
      [
        "Đường đi của sự kiện",
        "Capture đi từ tổ tiên về phía mục tiêu, sau đó là target, rồi bubble đi ngược lên nếu event.bubbles là true. event.target và currentTarget không phải luôn giống nhau."
      ],
      [
        "Không phải sự kiện nào cũng nổi bọt",
        "Cần kiểm tra thuộc tính event.bubbles. Event.composedPath() cho biết đường đi của sự kiện, kể cả trong những tình huống có Shadow DOM theo quy tắc composed/retargeting."
      ]
    ],
    "example": {
      "html": "<div id=\"parent\" style=\"padding:20px;background:#dbeafe\">Card <button id=\"child\">Xóa</button></div><p id=\"out\"></p>",
      "js": "document.querySelector(\"#parent\").addEventListener(\"click\", () => console.log(\"parent\"));\ndocument.querySelector(\"#child\").addEventListener(\"click\", (e) => {\n  console.log(\"child\");\n  e.stopPropagation();\n});"
    },
    "steps": [
      "Click child phát sự kiện tại button.",
      "Listener button chạy trước trong bubbling.",
      "stopPropagation ngăn sự kiện tiếp tục lên parent."
    ],
    "diagram": [
      "Capturing",
      "Target",
      "Bubbling",
      "Tới tổ tiên"
    ],
    "bugs": [
      {
        "bad": "e.stopPropagation(); // nghĩ rằng link sẽ không điều hướng",
        "why": "stopPropagation không thay thế preventDefault; liên kết có thể vẫn điều hướng.",
        "fix": "Dùng e.preventDefault() để hủy hành vi mặc định nếu sự kiện có thể bị hủy."
      }
    ],
    "summary": [
      "Propagation đi theo đường trong cây DOM.",
      "stopPropagation khác preventDefault."
    ],
    "quiz": {
      "q": "stopPropagation() chủ yếu làm gì?",
      "options": [
        "Xóa DOM node",
        "Ngăn lan truyền sự kiện",
        "Ngăn mọi hành vi mặc định"
      ],
      "answer": 1,
      "why": "stopPropagation dừng lan truyền, không trực tiếp chặn default action."
    },
    "exercises": [
      {
        "id": "11-8-a",
        "title": "Ngăn parent nhận click",
        "level": "Có hướng dẫn",
        "brief": "Click nút #child cập nhật #out thành “Con”; không để listener #parent ghi đè thành “Cha”.",
        "html": "<div id=\"parent\"><button id=\"child\">Chọn con</button></div><p id=\"out\"></p>",
        "js": "document.querySelector(\"#parent\").addEventListener(\"click\",()=>document.querySelector(\"#out\").textContent=\"Cha\");\n// Viết listener child và chặn propagation",
        "checks": [
          {
            "type": "clickText",
            "selector": "#child",
            "target": "#out",
            "expected": "Con",
            "label": "Child click không bị parent ghi đè"
          }
        ],
        "hint": "Gọi event.stopPropagation() trong callback child.",
        "solution": "document.querySelector(\"#parent\").addEventListener(\"click\",()=>document.querySelector(\"#out\").textContent=\"Cha\"); document.querySelector(\"#child\").addEventListener(\"click\",e=>{e.stopPropagation();document.querySelector(\"#out\").textContent=\"Con\";});",
        "css": ""
      },
      {
        "id": "11-8-b",
        "title": "Hiểu thứ tự chạy",
        "level": "Tự giải",
        "brief": "Nhấn nút #child. Gọi console.log(\"child\") trong listener con và console.log(\"parent\") trong listener cha, quan sát thứ tự.",
        "html": "<div id=\"parent\"><button id=\"child\">Thử</button></div>",
        "js": "// Viết hai listener click",
        "checks": [
          {
            "type": "consoleSequence",
            "selector": "#child",
            "expected": [
              "child",
              "parent"
            ],
            "label": "Bubbling: child trước parent"
          }
        ],
        "hint": "Không dùng stopPropagation trong bài này.",
        "solution": "document.querySelector(\"#parent\").addEventListener(\"click\",()=>console.log(\"parent\"));document.querySelector(\"#child\").addEventListener(\"click\",()=>console.log(\"child\"));",
        "css": ""
      },
      {
        "id": "11-8-c",
        "title": "Thử thách và giải thích: Hiểu thứ tự chạy",
        "level": "Nâng cao",
        "brief": "Nhấn nút #child. Gọi console.log(\"child\") trong listener con và console.log(\"parent\") trong listener cha, quan sát thứ tự. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<div id=\"parent\"><button id=\"child\">Thử</button></div>",
        "js": "// Viết hai listener click",
        "checks": [
          {
            "type": "consoleSequence",
            "selector": "#child",
            "expected": [
              "child",
              "parent"
            ],
            "label": "Bubbling: child trước parent"
          }
        ],
        "hint": "Không dùng stopPropagation trong bài này.",
        "solution": "document.querySelector(\"#parent\").addEventListener(\"click\",()=>console.log(\"parent\"));document.querySelector(\"#child\").addEventListener(\"click\",()=>console.log(\"child\"));",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-9",
    "title": "Kiểm soát hành vi sự kiện",
    "subtitle": "Phân biệt ngăn hành vi mặc định với ngăn propagation",
    "scenario": "Một form gửi dữ liệu mặc định khiến trang điều hướng hoặc reload. Khi cần kiểm tra trước khi gửi, JavaScript có thể ngăn hành vi mặc định.",
    "theory": [
      [
        "preventDefault",
        "Nếu event.cancelable=true, preventDefault() yêu cầu hủy default action, ví dụ submit form hoặc điều hướng link; không tự dừng propagation."
      ],
      [
        "submit event",
        "Nghe submit trên form chứ không chỉ click trên button: người dùng còn có thể gửi bằng Enter hoặc cách khác."
      ],
      [
        "Kiểm tra cơ bản",
        "Ngăn submit trong bài thực hành, đọc giá trị và hiển thị thông báo. Validation đầy đủ sẽ học ở chuyên đề 12."
      ],
      [
        "Passive listener",
        "preventDefault() không hoạt động như mong muốn trong passive listener; thường không dùng passive:true khi cần hủy default action."
      ],
      [
        "preventDefault khác stopPropagation",
        "preventDefault cố gắng hủy hành vi mặc định nếu event.cancelable=true và listener được phép. stopPropagation dừng lan truyền đến các node tiếp theo; stopImmediatePropagation còn ngăn các listener tiếp theo trên cùng mục tiêu."
      ],
      [
        "Passive listeners",
        "Trong listener passive, preventDefault không hủy hành vi mặc định; trình duyệt có thể đưa cảnh báo."
      ]
    ],
    "example": {
      "html": "<form id=\"form\"><input id=\"name\" required placeholder=\"Tên\"><button>Gửi</button></form><p id=\"out\"></p>",
      "js": "const form = document.querySelector(\"#form\");\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  document.querySelector(\"#out\").textContent = \"Đã nhận dữ liệu\";\n});"
    },
    "steps": [
      "Người dùng submit biểu mẫu.",
      "Listener gọi preventDefault để tránh hành vi gửi/điều hướng mặc định.",
      "Cập nhật phần thông báo bằng DOM."
    ],
    "diagram": [
      "submit event",
      "preventDefault",
      "Xử lý JS",
      "Hiển thị kết quả"
    ],
    "bugs": [
      {
        "bad": "form.addEventListener(\"click\", e => e.preventDefault());",
        "why": "Bắt click của form có thể chặn thao tác khác và không đại diện mọi cách submit.",
        "fix": "Lắng nghe submit trên chính form."
      }
    ],
    "summary": [
      "submit và click là hai sự kiện khác nhau.",
      "preventDefault không đồng nghĩa stopPropagation."
    ],
    "quiz": {
      "q": "Nên lắng nghe sự kiện gì để xử lý mọi cách gửi form thông dụng?",
      "options": [
        "click trên button",
        "submit trên form",
        "mouseover trên form"
      ],
      "answer": 1,
      "why": "submit hoạt động với nút submit và thao tác gửi form bằng bàn phím."
    },
    "exercises": [
      {
        "id": "11-9-a",
        "title": "Chặn submit mặc định",
        "level": "Có hướng dẫn",
        "brief": "Submit form hợp lệ sẽ cập nhật #out thành “Đã gửi (mô phỏng)” mà không điều hướng.",
        "html": "<form id=\"form\"><input value=\"An\"><button type=\"submit\">Gửi</button></form><p id=\"out\"></p>",
        "js": "// Lắng nghe submit trên form và preventDefault",
        "checks": [
          {
            "type": "submitText",
            "selector": "#form",
            "target": "#out",
            "expected": "Đã gửi (mô phỏng)",
            "label": "Submit không điều hướng và hiển thị kết quả"
          }
        ],
        "hint": "Bắt sự kiện submit, gọi e.preventDefault().",
        "solution": "document.querySelector(\"#form\").addEventListener(\"submit\", e=>{e.preventDefault();document.querySelector(\"#out\").textContent=\"Đã gửi (mô phỏng)\";});",
        "css": ""
      },
      {
        "id": "11-9-b",
        "title": "Dùng form.value",
        "level": "Tự giải",
        "brief": "Submit form sẽ hiển thị đúng giá trị của #name trong #out.",
        "html": "<form id=\"form\"><input id=\"name\" value=\"Minh\"><button>Gửi</button></form><p id=\"out\"></p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "submitText",
            "selector": "#form",
            "target": "#out",
            "expected": "Minh",
            "label": "Submit lấy tên từ input"
          }
        ],
        "hint": "Đọc document.querySelector(\"#name\").value.",
        "solution": "document.querySelector(\"#form\").addEventListener(\"submit\",e=>{e.preventDefault();document.querySelector(\"#out\").textContent=document.querySelector(\"#name\").value;});",
        "css": ""
      },
      {
        "id": "11-9-c",
        "title": "Thử thách và giải thích: Dùng form.value",
        "level": "Nâng cao",
        "brief": "Submit form sẽ hiển thị đúng giá trị của #name trong #out. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<form id=\"form\"><input id=\"name\" value=\"Minh\"><button>Gửi</button></form><p id=\"out\"></p>",
        "js": "// Viết code",
        "checks": [
          {
            "type": "submitText",
            "selector": "#form",
            "target": "#out",
            "expected": "Minh",
            "label": "Submit lấy tên từ input"
          }
        ],
        "hint": "Đọc document.querySelector(\"#name\").value.",
        "solution": "document.querySelector(\"#form\").addEventListener(\"submit\",e=>{e.preventDefault();document.querySelector(\"#out\").textContent=document.querySelector(\"#name\").value;});",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-10",
    "title": "Event Delegation",
    "subtitle": "Một listener cho danh sách có nhiều phần tử động",
    "scenario": "Bạn có 100 nút Xóa được tạo động. Gắn một listener cho mỗi nút sẽ khó quản lý, đặc biệt khi danh sách thay đổi.",
    "theory": [
      [
        "Ý tưởng",
        "Gắn một listener lên phần tử cha, dựa vào bubbling để xử lý sự kiện xuất phát từ node con."
      ],
      [
        "closest",
        "event.target.closest(\"button[data-action]\") tìm button gần nhất khớp selector, hữu ích khi click icon hoặc span bên trong button."
      ],
      [
        "Kiểm tra phạm vi",
        "Dùng container.contains(button) để tránh xử lý một button nằm ngoài vùng mục tiêu trong những cấu trúc phức tạp."
      ],
      [
        "Ứng dụng",
        "Danh sách động, bảng, menu. Không áp dụng delegation y hệt cho sự kiện không bubble; có thể cần focusin/focusout hoặc capture."
      ],
      [
        "Kiểm tra vùng ủy quyền",
        "Có thể dùng event.target.closest(selector) để tìm phần tử liên quan, nhưng cần kiểm tra phần tử tìm được thực sự nằm trong container (container.contains(match)) để tránh chọn nhầm phần tử thuộc vùng khác."
      ]
    ],
    "example": {
      "html": "<ul id=\"list\"><li>A <button data-action=\"remove\">Xóa</button></li><li>B <button data-action=\"remove\">Xóa</button></li></ul>",
      "js": "const list = document.querySelector(\"#list\");\nlist.addEventListener(\"click\", event => {\n  const btn = event.target.closest(\"button[data-action=remove]\");\n  if (!btn || !list.contains(btn)) return;\n  btn.closest(\"li\").remove();\n});"
    },
    "steps": [
      "Click nút hoặc chữ bên trong nút.",
      "Sự kiện bubble lên ul, nơi có một listener.",
      "closest tìm đúng button được kích hoạt.",
      "closest(\"li\").remove() xóa mục tương ứng."
    ],
    "diagram": [
      "Button được click",
      "Bubble lên UL",
      "closest(button)",
      "Xóa đúng LI"
    ],
    "bugs": [
      {
        "bad": "if (e.target.tagName === \"BUTTON\") {...}",
        "why": "Khi click icon/span trong button, e.target có thể là SPAN, không phải BUTTON.",
        "fix": "const btn = e.target.closest(\"button\"); if (!btn) return;"
      }
    ],
    "summary": [
      "Delegation giúp xử lý cả phần tử được thêm sau này.",
      "Dùng closest + contains để chọn đúng mục tiêu."
    ],
    "quiz": {
      "q": "Ưu điểm quan trọng của event delegation là gì?",
      "options": [
        "Không cần DOM",
        "Một listener ở cha xử lý phần tử con động",
        "Mọi event đều bubble"
      ],
      "answer": 1,
      "why": "Event delegation tận dụng bubbling của các event phù hợp."
    },
    "exercises": [
      {
        "id": "11-10-a",
        "title": "Xóa mục bằng delegation",
        "level": "Có hướng dẫn",
        "brief": "Gắn một click listener trên #list. Nhấn nút Xóa trong item A khiến item A biến mất.",
        "html": "<ul id=\"list\"><li id=\"a\">A <button data-remove>Xóa</button></li><li id=\"b\">B <button data-remove>Xóa</button></li></ul>",
        "js": "// Listener duy nhất ở #list",
        "checks": [
          {
            "type": "clickAbsent",
            "selector": "#a button",
            "absent": "#a",
            "label": "Click xóa item A"
          },
          {
            "type": "clickAbsent",
            "selector": "#b button",
            "absent": "#b",
            "label": "Click xóa item B"
          }
        ],
        "hint": "closest(\"button[data-remove]\") và closest(\"li\").remove().",
        "solution": "const list=document.querySelector(\"#list\");list.addEventListener(\"click\",e=>{const btn=e.target.closest(\"button[data-remove]\");if(!btn||!list.contains(btn))return;btn.closest(\"li\").remove();});",
        "css": ""
      },
      {
        "id": "11-10-b",
        "title": "Delegation với danh sách mới",
        "level": "Nâng cao",
        "brief": "Khi bấm Thêm, tạo một li chứa button. Nhấn nút Xóa mới phải xóa được li đó nhờ listener chung.",
        "html": "<button id=\"add\">Thêm</button><ul id=\"list\"></ul>",
        "js": "// Tự lập trình thêm và xóa",
        "checks": [
          {
            "type": "sequenceAbsent",
            "steps": [
              {
                "event": "click",
                "selector": "#add"
              },
              {
                "event": "click",
                "selector": "#list button"
              }
            ],
            "absent": "#list li",
            "label": "Tạo rồi xóa item động"
          }
        ],
        "hint": "Thêm item dùng createElement; nút xóa được listener ở ul xử lý.",
        "solution": "const list=document.querySelector(\"#list\");document.querySelector(\"#add\").addEventListener(\"click\",()=>{const li=document.createElement(\"li\");const btn=document.createElement(\"button\");btn.textContent=\"Xóa\";li.append(\"Mới \",btn);list.append(li)});list.addEventListener(\"click\",e=>{const btn=e.target.closest(\"button\");if(btn&&list.contains(btn))btn.closest(\"li\").remove()});",
        "css": ""
      },
      {
        "id": "11-10-c",
        "title": "Thử thách và giải thích: Delegation với danh sách mới",
        "level": "Nâng cao",
        "brief": "Khi bấm Thêm, tạo một li chứa button. Nhấn nút Xóa mới phải xóa được li đó nhờ listener chung. Sau khi giải được, hãy phân tích vì sao callback chỉ chạy khi sự kiện tương ứng xảy ra và thử thay một dòng để dự đoán sự khác biệt.",
        "html": "<button id=\"add\">Thêm</button><ul id=\"list\"></ul>",
        "js": "// Tự lập trình thêm và xóa",
        "checks": [
          {
            "type": "sequenceAbsent",
            "steps": [
              {
                "event": "click",
                "selector": "#add"
              },
              {
                "event": "click",
                "selector": "#list button"
              }
            ],
            "absent": "#list li",
            "label": "Tạo rồi xóa item động"
          }
        ],
        "hint": "Thêm item dùng createElement; nút xóa được listener ở ul xử lý.",
        "solution": "const list=document.querySelector(\"#list\");document.querySelector(\"#add\").addEventListener(\"click\",()=>{const li=document.createElement(\"li\");const btn=document.createElement(\"button\");btn.textContent=\"Xóa\";li.append(\"Mới \",btn);list.append(li)});list.addEventListener(\"click\",e=>{const btn=e.target.closest(\"button\");if(btn&&list.contains(btn))btn.closest(\"li\").remove()});",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-11",
    "title": "Debounce và Throttle",
    "subtitle": "Giảm số lần xử lý khi sự kiện xảy ra liên tục",
    "scenario": "Khi người dùng gõ từng ký tự hoặc cuộn trang, callback có thể chạy hàng chục lần trong thời gian ngắn. Debounce và throttle giúp điều tiết số lần thực hiện công việc.",
    "theory": [
      [
        "Debounce",
        "Debounce trì hoãn xử lý đến khi không có sự kiện mới trong khoảng thời gian đã định. Thường dùng khi tìm kiếm trong lúc gõ; mỗi sự kiện mới đặt lại timer."
      ],
      [
        "Throttle",
        "Throttle giới hạn tần suất thực hiện callback. Nó hữu ích cho các thao tác cập nhật theo cuộn hoặc di chuyển con trỏ. Tùy cách cài đặt, callback có thể chạy ở đầu hoặc cuối khoảng thời gian."
      ],
      [
        "Không phải tính năng có sẵn của addEventListener",
        "Debounce và throttle là các mẫu tổ chức callback, thường cài đặt với setTimeout và các biến lưu trạng thái; chúng không phải tùy chọn mặc định của DOM API."
      ]
    ],
    "example": {
      "html": "<input id=\"search\" placeholder=\"Nhập từ khóa\"><p id=\"out\">Chờ nhập...</p>",
      "js": "let timer;\ndocument.querySelector(\"#search\").addEventListener(\"input\", e => {\n  clearTimeout(timer);\n  const query = e.target.value;\n  timer = setTimeout(() => {\n    document.querySelector(\"#out\").textContent = \"Tìm: \" + query;\n  }, 350);\n});"
    },
    "steps": [
      "Mỗi lần gõ tạo một sự kiện input.",
      "clearTimeout hủy lịch xử lý trước đó.",
      "Khi ngừng gõ đủ 350 ms, callback cập nhật kết quả."
    ],
    "diagram": [
      "Gõ ký tự",
      "Đặt lại timer",
      "Ngừng gõ đủ thời gian",
      "Chạy callback"
    ],
    "bugs": [
      {
        "bad": "setTimeout(search(query), 300);",
        "why": "search(query) bị gọi ngay; setTimeout nhận giá trị trả về thay vì callback.",
        "fix": "setTimeout(() => search(query), 300)."
      }
    ],
    "summary": [
      "Debounce đợi sự kiện ngừng một khoảng thời gian.",
      "Throttle giới hạn tốc độ chạy callback khi sự kiện liên tục.",
      "Cần chọn độ trễ và cách chạy đầu/cuối phù hợp trải nghiệm người dùng."
    ],
    "quiz": {
      "q": "Muốn chỉ tìm kiếm sau khi người dùng ngừng gõ khoảng 300 ms, nên dùng cách nào?",
      "options": [
        "Debounce",
        "Thêm một onclick",
        "Bubbling"
      ],
      "answer": 0,
      "why": "Debounce đặt lại timer khi sự kiện mới xảy ra và thực thi sau khoảng yên lặng."
    },
    "exercises": [
      {
        "id": "11-11-a",
        "title": "Nhận nội dung sau khi dừng gõ",
        "level": "Có hướng dẫn",
        "brief": "Khi nhập vào #search, sau 200 ms không nhập thêm, #out hiển thị “Tìm: ” cộng giá trị vừa nhập.",
        "html": "<input id=\"search\"><p id=\"out\"></p>",
        "js": "// Dùng clearTimeout và setTimeout 200 ms",
        "checks": [
          {
            "type": "inputDelay",
            "selector": "#search",
            "value": "DOM",
            "target": "#out",
            "expected": "Tìm: DOM",
            "delay": 270,
            "label": "Debounce hiển thị từ khóa sau thời gian chờ"
          }
        ],
        "hint": "Lưu timer bên ngoài callback; mỗi input hủy timer cũ.",
        "solution": "let timer; document.querySelector(\"#search\").addEventListener(\"input\",e=>{clearTimeout(timer);const v=e.target.value;timer=setTimeout(()=>document.querySelector(\"#out\").textContent=\"Tìm: \"+v,200)});",
        "css": ""
      },
      {
        "id": "11-11-b",
        "title": "Debounce đếm lần xử lý",
        "level": "Tự giải",
        "brief": "Người dùng gõ vào #keyword; 200 ms sau, #result hiển thị nội dung ô nhập in hoa.",
        "html": "<input id=\"keyword\"><p id=\"result\"></p>",
        "js": "// Tự cài đặt debounce",
        "checks": [
          {
            "type": "inputDelay",
            "selector": "#keyword",
            "value": "event",
            "target": "#result",
            "expected": "EVENT",
            "delay": 270,
            "label": "Chuyển thành chữ hoa sau 200 ms"
          }
        ],
        "hint": "String.toUpperCase() và clearTimeout có thể kết hợp.",
        "solution": "let t; const input=document.querySelector(\"#keyword\"); input.addEventListener(\"input\",()=>{clearTimeout(t);t=setTimeout(()=>document.querySelector(\"#result\").textContent=input.value.toUpperCase(),200)});",
        "css": ""
      },
      {
        "id": "11-11-c",
        "title": "Thực hành điều tiết callback",
        "level": "Nâng cao",
        "brief": "Khi nhập #search, chỉ cập nhật #out sau 200 ms tạm ngừng nhập. Khi xóa hết nội dung, hiển thị “Trống”.",
        "html": "<input id=\"search\"><p id=\"out\"></p>",
        "js": "// Xử lý cả trường hợp chuỗi rỗng",
        "checks": [
          {
            "type": "inputDelay",
            "selector": "#search",
            "value": "JS",
            "target": "#out",
            "expected": "JS",
            "delay": 270,
            "label": "Hiển thị từ khóa"
          },
          {
            "type": "inputDelay",
            "selector": "#search",
            "value": "",
            "target": "#out",
            "expected": "Trống",
            "delay": 270,
            "label": "Xử lý chuỗi rỗng"
          }
        ],
        "hint": "Dùng input.value.trim() và kiểm tra chuỗi rỗng trong callback.",
        "solution": "let t;const input=document.querySelector(\"#search\");input.addEventListener(\"input\",()=>{clearTimeout(t);t=setTimeout(()=>document.querySelector(\"#out\").textContent=input.value.trim()||\"Trống\",200)});",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  },
  {
    "id": "11-12",
    "title": "Custom Events và dự án tổng hợp",
    "subtitle": "Tạo sự kiện riêng bằng CustomEvent và kết hợp kiến thức Events",
    "scenario": "Trong ứng dụng quản lý công việc, một thành phần thêm mục mới và thành phần khác hiển thị thông báo. Làm thế nào để hai thành phần phối hợp mà không gọi trực tiếp các hàm nội bộ của nhau?",
    "theory": [
      [
        "CustomEvent là gì?",
        "CustomEvent cho phép tạo sự kiện mang tên do bạn đặt. Trường detail chứa dữ liệu bổ sung, ví dụ tên công việc mới được tạo."
      ],
      [
        "dispatchEvent()",
        "target.dispatchEvent(event) phát sự kiện theo cách đồng bộ: các listener thích hợp chạy trước khi lệnh dispatchEvent() trả về. Không mặc định rằng sự kiện nhân tạo tương đương thao tác người dùng thật."
      ],
      [
        "bubbles và cancelable",
        "Khi tạo CustomEvent, các thuộc tính bubbles và cancelable mặc định là false. Đặt bubbles:true nếu muốn sự kiện nổi bọt; đặt cancelable:true nếu cần cho phép preventDefault()."
      ],
      [
        "isTrusted",
        "Sự kiện do mã JavaScript tạo và phát bằng dispatchEvent() có isTrusted là false. Nó không tự mang các đặc quyền dành cho tương tác thực của người dùng."
      ],
      [
        "Dự án nhỏ",
        "Tạo danh sách công việc có thêm, xóa, đếm và phát CustomEvent khi danh sách thay đổi. Có thể vận dụng event delegation để tránh gắn listener cho từng mục mới."
      ],
      [
        "dispatchEvent và sự kiện đáng tin cậy",
        "dispatchEvent đồng bộ, sự kiện được tạo bởi mã JavaScript thường có isTrusted=false. Một sự kiện nhân tạo không tự có quyền tương đương thao tác người dùng."
      ]
    ],
    "example": {
      "html": "<button id=\"add\">Thêm công việc</button><ul id=\"list\"></ul><p id=\"status\">Chưa thêm</p>",
      "js": "const button = document.querySelector(\"#add\");\nconst list = document.querySelector(\"#list\");\nbutton.addEventListener(\"click\", () => {\n  const item = document.createElement(\"li\");\n  item.textContent = \"Công việc \" + (list.children.length + 1);\n  list.append(item);\n  list.dispatchEvent(new CustomEvent(\"task-added\", { detail: { name: item.textContent } }));\n});\nlist.addEventListener(\"task-added\", e => {\n  document.querySelector(\"#status\").textContent = \"Đã thêm: \" + e.detail.name;\n});"
    },
    "steps": [
      "Nhấn Thêm công việc tạo một mục li mới.",
      "Code phát sự kiện task-added với dữ liệu detail.name.",
      "Listener nhận sự kiện riêng và cập nhật thông báo."
    ],
    "diagram": [
      "Click thêm",
      "Tạo li",
      "dispatchEvent(task-added)",
      "Listener đọc detail"
    ],
    "bugs": [
      {
        "bad": "new CustomEvent(\"task-added\", { name: \"A\" })",
        "why": "Dữ liệu tùy chỉnh phải đặt trong thuộc tính detail của đối số khởi tạo.",
        "fix": "new CustomEvent(\"task-added\", { detail: { name: \"A\" } })"
      },
      {
        "bad": "document.dispatchEvent(new Event(\"task-added\"));\nconsole.log(event.detail.name);",
        "why": "Event thường không có thuộc tính detail, và biến event không tồn tại tự động ở vị trí này.",
        "fix": "Tạo CustomEvent và đọc e.detail trong hàm lắng nghe."
      }
    ],
    "summary": [
      "CustomEvent cho phép truyền dữ liệu trong detail.",
      "dispatchEvent phân phối sự kiện đồng bộ trong cùng tiến trình JavaScript.",
      "Bài tổng hợp sử dụng Events kết hợp kiến thức DOM đã học."
    ],
    "quiz": {
      "q": "Muốn truyền một object thông qua CustomEvent, dùng thuộc tính nào?",
      "options": [
        "target",
        "detail",
        "timeStamp"
      ],
      "answer": 1,
      "why": "CustomEvent cung cấp trường detail để truyền dữ liệu ứng dụng."
    },
    "exercises": [
      {
        "id": "11-12-a",
        "title": "Phát sự kiện tùy chỉnh",
        "level": "Có hướng dẫn",
        "brief": "Bấm nút #send sẽ phát CustomEvent(\"notice\", {detail:{text:\"Đã nhận\"}}) trên #box, listener hiển thị nội dung tại #out.",
        "html": "<button id=\"send\">Phát</button><div id=\"box\"></div><p id=\"out\"></p>",
        "js": "// Đăng ký listener notice và phát CustomEvent khi click",
        "checks": [
          {
            "type": "clickText",
            "selector": "#send",
            "target": "#out",
            "expected": "Đã nhận",
            "label": "Truyền dữ liệu detail thành công"
          }
        ],
        "hint": "Đọc event.detail.text bên trong listener.",
        "solution": "const box=document.querySelector(\"#box\");box.addEventListener(\"notice\",e=>document.querySelector(\"#out\").textContent=e.detail.text);document.querySelector(\"#send\").addEventListener(\"click\",()=>box.dispatchEvent(new CustomEvent(\"notice\",{detail:{text:\"Đã nhận\"}})));",
        "css": ""
      },
      {
        "id": "11-12-b",
        "title": "Phát sự kiện cập nhật",
        "level": "Tự giải",
        "brief": "Bấm #add, tăng #count lên 1 và phát sự kiện count-changed với detail.count=1; listener cập nhật #out thành “Số lượng: 1”.",
        "html": "<button id=\"add\">Thêm</button><span id=\"count\">0</span><p id=\"out\"></p>",
        "js": "// Tạo CustomEvent khi nút được nhấn",
        "checks": [
          {
            "type": "clickText",
            "selector": "#add",
            "target": "#out",
            "expected": "Số lượng: 1",
            "label": "Listener đọc detail.count"
          }
        ],
        "hint": "Có thể dispatchEvent trên chính nút #add.",
        "solution": "const b=document.querySelector(\"#add\");b.addEventListener(\"count-changed\",e=>document.querySelector(\"#out\").textContent=\"Số lượng: \"+e.detail.count);b.addEventListener(\"click\",()=>{const n=Number(document.querySelector(\"#count\").textContent)+1;document.querySelector(\"#count\").textContent=n;b.dispatchEvent(new CustomEvent(\"count-changed\",{detail:{count:n}}));});",
        "css": ""
      },
      {
        "id": "11-12-c",
        "title": "Todo List với delegation",
        "level": "Nâng cao",
        "brief": "Nhấn #add tạo li chứa button.delete. Nhấn nút Xóa của mục mới để xóa li, đồng thời cập nhật số lượng ở #count.",
        "html": "<button id=\"add\">Thêm</button><ul id=\"list\"></ul><p id=\"count\">0</p>",
        "js": "// Kết hợp click listener và delegation",
        "checks": [
          {
            "type": "clickText",
            "selector": "#add",
            "target": "#count",
            "expected": "1",
            "label": "Thêm mục mới cập nhật số lượng"
          },
          {
            "type": "sequenceAbsent",
            "steps": [
              {
                "event": "click",
                "selector": "#add"
              },
              {
                "event": "click",
                "selector": "#list .delete"
              }
            ],
            "absent": "#list li",
            "label": "Xóa mục mới bằng event delegation"
          }
        ],
        "hint": "Tạo li bằng createElement; dùng list.addEventListener(\"click\",...) và closest(\".delete\").",
        "solution": "const list=document.querySelector(\"#list\"),count=document.querySelector(\"#count\");document.querySelector(\"#add\").addEventListener(\"click\",()=>{const li=document.createElement(\"li\"),b=document.createElement(\"button\");b.className=\"delete\";b.textContent=\"Xóa\";li.append(\"Công việc \",b);list.append(li);count.textContent=list.children.length;});list.addEventListener(\"click\",e=>{if(e.target.closest(\".delete\")){e.target.closest(\"li\").remove();count.textContent=list.children.length}});",
        "css": ""
      }
    ],
    "references": [
      "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
      "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    ]
  }
];
export const allExercises = lessons.flatMap(l=>l.exercises.map(e=>({...e,lessonId:l.id})));
