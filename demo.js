function waitForFiveSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Đã chờ 5 giây');
       console.log("ketqua" ); 
    }, 5000); // 5000ms = 5 giây
    
  }
);
}
function waitForFiveSeconds2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Đã chờ 5 giây');
       console.log("ketqua4s" ); 
    }, 4000); // 5000ms = 5 giây
    
  }
);
}
// Sử dụng hàm với async/await
function run() {
  console.log('Bắt đầu chờ...');
  waitForFiveSeconds();
  waitForFiveSeconds2();
  
  console.log('Kết thúc chờ...');
}

run();
console.log('d')
