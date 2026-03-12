
function openModal(week) {
    document.getElementById("model").style.display = "flex";

    document.getElementById("model-title").innerText = "ไฟล์งาน : Week " + week;
    document.getElementById("m-detail").innerText = "เลือกหน้าที่คุณต้องการไป"
    if (week === 1) {
        document.getElementById("url-web").href = "https://blackglassesdev.github.io/Week-1/";
        document.getElementById("page-detail").innerText = "หน้าการทดสอบการเขียนโค้ด และแสดงหน้าเว็บ รายชื่อสมาชิกกลุ่ม";
        document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-1";
        document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด เช่น README.md ENVIRONMENT.md และอื่นๆ";
    } else if (week === 2) {
        document.getElementById("url-web").href = "https://blackglassesdev.github.io/Week-2/";
        document.getElementById("page-detail").innerText = "Web Page การศึกษาจาก SRS เพื่อสร้างหน้าเว็บ";
        document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-2";
        document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด เช่น README.md SRS_Draft.md และอื่นๆ";
    } else if (week === 3) {
        document.getElementById("url-web").href = "https://blackglassesdev.github.io/Week-3/";
        document.getElementById("page-detail").innerText = "แก้ Web Page โดยนำข้อมูลมาจากไฟล์ SRS ที่อาจารย์มีให้";
        document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-3";
        document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด เช่น LAB3_UseCase.md LAB3_UserStories.md และอื่นๆ";
    } else if (week === 4) {
        alert("เนื่องจากงานนี้เป็นงานเดี่ยว หน้าเว็บของสมาชิกแต่ละคน หรือ Github ของแต่ละคนจะนำไว้ในไฟล์ README.md ใน Week-4 ที่ Github ด้านล่างนี้");
        document.getElementById("url-web").href = "https://blackglassesdev.github.io/Week-4/";
        document.getElementById("page-detail").innerText = "Web Page แนะนำตนเอง นายชโนดม อองกุลนะ";
        document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-4";
        document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด หน้าเว็บและ Github ของสมาชิกทุกคน จะอยู่ใน README.md นี้";
    } else if (week === 5) {
        document.getElementById("url-web").href = "null";
        document.getElementById("page-detail").innerText = "อาจารย์ติดธุระไม่มีสอน";
        // document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-4";
        // document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด หน้าเว็บและ Github ของสมาชิกทุกคน จะอยู่ใน README.md นี้";
    } else if (week === 6) {
        // document.getElementById("url-web").href = "https://blackglassesdev.github.io/Week-6/";
        // document.getElementById("page-detail").innerText = "แก้ Web Page โดยนำข้อมูลมาจากไฟล์ SRS ที่อาจารย์มีให้";
        // document.getElementById("url-git").href = "https://github.com/BlackglassesDev/BlackglassesDev.github.io/tree/main/Week-6";
        // document.getElementById("git-detail").innerText = "มีไฟล์แสดงรวมทั้งหมด เช่น LAB3_UseCase.md LAB3_UserStories.md และอื่นๆ";
    }
}

function closeModal() {
    document.getElementById("model").style.display = "none";
}

// ปิดเมื่อคลิกพื้นที่นอกกล่อง
window.onclick = function (e) {
    if (e.target.id === "model") {
        closeModal();
    }
}