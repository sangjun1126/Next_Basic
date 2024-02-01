// 페이지 만들기
// page.js를 만들고
// export default로 내보내기
// import는 다른 파일을 가져오는 문법

export default function List() {
  // 임시 데이터 만들기
  let list_1 = ["Tomatoes", "Pasta", "Coconut"];
  let price = [20, 30, 40];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {list_1.map((item, index) => (
        <div className="food" key={index}>
          <img src={"/food" + i + "png"} className="food-img" />
          <h4>
            {item} ${price[index]}
          </h4>
        </div>
      ))}
    </div>
  );
}
