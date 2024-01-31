// 페이지 만들기
// page.js를 만들고
// export default로 내보내기

export default function List() {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품 1 $40</h4>
      </div>
      <div className="food">
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}
