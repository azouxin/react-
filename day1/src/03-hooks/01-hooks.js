import React, { useEffect, useState } from 'react';
// 组件类一定要继承react的component
function Text(props) {
  console.log(props);
  return <div>123</div>;
}
export default function App() {
  const [state, setState] = useState({ name: 1 });
  // useEffect()
  console.log(state, setState);
  return (
    <div>
      123 <Text name="123"></Text>
    </div>
  );
}
