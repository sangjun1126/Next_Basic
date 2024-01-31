// 리액트 jsx 문법을 지켜줘야 함
// 중괄호 쓰면 data binding이 발생함

export default function Home() {
  let name = "정상준";
  let title_name = "Apple_fresh";
  let link = "http://google.com";
  return (
    <div>
      <h4 className="title">{title_name}</h4>
      <p className="title-sub">by dev {name}</p>
      <a className="link " href={link}>
        링크
      </a>
    </div>
  );
}
