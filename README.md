# javascript を利用して web ブラウザ上で csv ファイルの表示
日頃から csv ファイルを利用することが多いのですが、PC によっては Excel をインストールしていない場合もあるため、csv ファイルの表示方法に困っていました。そこで、HTML、javascript、CSS で簡単な csv ファイルの表示を目指しました。現状、500行16列の csv ファイルの表示を行い、成功することができました。
### ファイル構成
##### HTML ファイル（index.HTML）
csv ファイルの表示を行うための HTML ファイルです。表示したい csv ファイルを選択することで web ブラウザ上で csv ファイルを見ることができます。
[実際のページ](https://yasu-yoshida-lab.github.io/javascript_csv/)
##### javascript ファイル（csv.js）
csv ファイルを HTML の table 要素に変換するための javascript ファイルです。変換だけでなく、行数と列数もファイル選択部分の隣に表示する仕様になっています。
##### CSS ファイル（table.css）
HTML ファイル内の table 要素を見やすくするために CSS によりスタイルを指定してあります。行ごとに色を付けて、視認性の向上を目指しています。
