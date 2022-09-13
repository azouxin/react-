export default function FilmsTable1(props) {
  console.log(props);

  // 路由嵌套路由
  return (
    <div
      onClick={() => {
        // query state 保密 （刷新就没了）
        props.history.push({ pathname: '/films/tab2', query: { id: 1 } });
      }}
    >
      FilmsTable1
    </div>
  );
}
