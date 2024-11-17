function applyStyle() {
    const element = document.querySelector('.nl-ll');
    element.classList.add('active');
}

// دالة لإزالة الفئة 'active' لإلغاء التغييرات
function removeStyle() {
    const element = document.querySelector('.nl-ll');
    element.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function () {
    // اختيار جميع الأزرار التي تحمل الفئة actionButton
    const actionButtons = document.querySelectorAll('.actionButton');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlertButton = document.getElementById('closeAlertButton');

    // تهيئة الـ Tooltip لكل زر
    actionButtons.forEach(button => {
        const tooltip = new bootstrap.Tooltip(button, {
            // تحديد مكان الـ Tooltip
            placement: 'right',  // يمكنك تحديد `right`, `bottom`, `top`, `left` هنا

            // تحديد الإزاحة باستخدام offset (مسافة أفقية ورأسية)
            offset: [30] // تغيير القيمة هنا حسب المسافة المطلوبة (الجزء الأول هو المحور X، الثاني هو المحور Y)
        });

        // التعامل مع حدث النقر لكل زر
        button.addEventListener('click', function () {
            // عرض رسالة التنبيه في الأعلى
            alertMessage.classList.remove('d-none');

            // تعديل النص الخاص بالـ Tooltip
            button.setAttribute('data-bs-original-title', 'Text Copied!');
            tooltip.show();
        });
    });

    // إغلاق التنبيه عند النقر على زر OK
    closeAlertButton.addEventListener('click', function () {
        alertMessage.classList.add('d-none');
    });
});



  