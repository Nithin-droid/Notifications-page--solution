const markAsRead_Btn = document.querySelector('.markAsRead');
const notificationCount = document.querySelector('.notification-count');
const notification = document.querySelectorAll('.markasunread');
const unread = document.querySelectorAll('.unread');

markAsRead_Btn.addEventListener('click', () => {
  notificationCount.textContent = '0';
  notification.forEach((element) => {
    element.classList.remove('markasnotification');
  });
  unread.forEach((ele) => {
    ele.classList.remove('unread');
  });
});
