// 페이지 만들기
// page.js를 만들고
// export default로 내보내기

export default function List() {
  // 임시 데이터 만들기
  let list_1 = ["Tomatoes", "Pasta", "Coconut"];
  let price = [20, 30, 40];
  let map_arr = [1, 2, 3];

  // 함수 안의 코드를 반복 실행 시켜주는 map 함수
  map_arr.map(() => {
    console.log("안녕");
  });

  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>
          {list_1[0]} ${price[0]}
        </h4>
      </div>
      <div className="food">
        <h4>
          {list_1[1]} ${price[1]}
        </h4>
      </div>
      <div className="food">
        <h4>
          {list_1[2]} ${price[2]}
        </h4>
      </div>
    </div>
  );
}
