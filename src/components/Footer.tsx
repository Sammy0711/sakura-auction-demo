export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#d4af37] mb-4">目高工房 桜</h3>
            <p className="text-gray-300">
              最高品質のメダカをあなたに
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">リンク</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">お知らせ</h4>
            <p className="text-gray-300">
              新着メダカ情報を随時更新中です
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 目高工房 桜. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

