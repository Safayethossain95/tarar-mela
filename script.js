// DOM থেকে এলিমেন্টগুলো সিলেক্ট করা
const heading = document.getElementById('myHeading');
const button = document.getElementById('myButton');

// বাটনে ক্লিক ইভেন্ট যোগ করা
button.addEventListener('click', () => {
    // হেডিং-এর লেখা পরিবর্তন করা
    heading.textContent = 'JavaScript is working! 🚀';
    
    // হেডিং-এর Tailwind ক্লাস পরিবর্তন করা (উদাহরণ)
    heading.classList.remove('text-blue-600');
    heading.classList.add('text-green-600');
});