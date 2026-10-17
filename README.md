# JS Academy — JavaScript Events (Chuyên đề 11)

Website giáo trình tương tác bằng **HTML, CSS, JavaScript thuần**, giao diện Light Mode mặc định. Bao gồm **10 bài Events**, 7 phần nội dung/bài, 20 bài tập thực hành, bộ kiểm tra phía trình duyệt, code runner iframe sandbox, Console, tìm kiếm, Dark Mode và lưu bản nháp tại localStorage.

## Chạy local

```bash
cd js-academy-events
python3 -m http.server 5500
```

Mở `http://localhost:5500`. Không mở trực tiếp bằng `file://` vì ứng dụng dùng ES Modules.

## GitHub Pages

1. Tạo repository GitHub, đưa **toàn bộ nội dung thư mục này** lên nhánh `main`.
2. Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save.
3. Mở `https://TEN-TAI-KHOAN.github.io/TEN-REPOSITORY/`.
4. Ứng dụng dùng hash routing (`#/11-1`, `#/practice/11-1-a`) nên có thể chia sẻ bài mà không phải cấu hình rewrite.

## CodeMirror 6 — trạng thái tích hợp

Ứng dụng có adapter `vendor/codemirror/editor.js` ưu tiên CodeMirror 6 nếu đã được vendor. Trong gói này, **CodeMirror 6 chưa được đóng kèm do môi trường xây dựng không truy cập được npm/CDN**. Vì vậy, trình chỉnh sửa hiện chạy với textarea dự phòng có thể gõ/chạy/test đầy đủ (không có syntax highlighting của CodeMirror).

Khi máy của bạn có kết nối npm, chạy:

```bash
bash tools/build-editor.sh
```

Script chuẩn bị bộ thư viện CodeMirror 6, dùng esbuild đóng thành ESM chạy thuần trình duyệt ở `vendor/codemirror/editor.js`. Sau đó reload website và commit file output lên GitHub. **Build chỉ diễn ra trên máy phát triển một lần**; GitHub Pages chỉ phục vụ file tĩnh và không cần Node.js. Entry code ở `tools/codemirror-entry.js` có thể kiểm tra/chỉnh sửa.

## Bảo mật và giới hạn

- Code người học chạy bên trong `iframe sandbox="allow-scripts"`, không phải DOM ứng dụng chính.
- Đây là môi trường học tập, **không phải sandbox tuyệt đối chống mã độc**. Không chạy mã từ nguồn không tin cậy; mã vòng lặp vô hạn có thể gây treo tab.
- Bộ test chạy trong iframe riêng, chấm theo kết quả hành vi; các test có thể xem được từ phía client.
- Dữ liệu lưu trên trình duyệt; không đồng bộ sang thiết bị khác.
- Không backend, database, đăng nhập hay Node.js ở production.
- Mọi tập tin cần cho trải nghiệm mặc định được đặt nội bộ, không yêu cầu CDN.

## Danh mục

11.1 Giới thiệu Events · 11.2 Listener lifecycle · 11.3 Event Object · 11.4 Mouse & Pointer · 11.5 Keyboard · 11.6 Input/Change/Focus · 11.7 Propagation · 11.8 preventDefault & submit · 11.9 Delegation · 11.10 Debounce/Throttle/CustomEvent.
