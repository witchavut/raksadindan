
function goToAdmin() {
  // เปลี่ยนเส้นทางไปหน้าผู้ดูแลระบบ
  window.location.href = "admin.html"; // ยังไม่ได้สร้างหน้านี้
}

function startCheckin() {
  const year = document.getElementById("year").value;
  const date = document.getElementById("date").value;
  if (!date) {
    alert("กรุณาเลือกวันที่ก่อนเริ่มเช็คชื่อ");
    return;
  }
  alert("เริ่มเช็คชื่อ ชั้นปีที่ " + year + " วันที่ " + date);
  // สามารถเปลี่ยน redirect ไปหน้าเช็คชื่อจริงได้ที่นี่
}
