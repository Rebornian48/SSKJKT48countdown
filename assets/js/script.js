$(document).ready(function() {
    const members = [
        { 
            name: 'Pengumuman Pertama',
            endDate: '2024-09-28T21:00:00+07:00',
            newsURL: '#'
        },
        { 
            name: 'STS Jessica Chandra (rill kah?)',
            endDate: '2024-09-29T19:00:00+07:00',
            newsURL: '#'
        },
        { 
            name: 'Pengumuman Kedua*',
            endDate: '2024-10-31T21:00:00+07:00',
            newsURL: '#'
        },
        { 
            name: 'Pengumuman Final',
            endDate: '2024-12-15T21:00:00+07:00',
            newsURL: '#'
        },
    ];

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateStr);
        return date.toLocaleDateString('id-ID', options);
    };

    members.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));

    members.forEach(member => {
        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        countdownElement.innerHTML = `
            <div class="member-details-container">
                <div class="member-details">
                    <h2 class="text-xl font-semibold member-name">${member.name}</h2>
                    <p class="text-gray-200">Tanggal: ${formatDate(member.endDate)}</span></p>
                    <a href="${member.newsURL}" class="news-button underline">Hasil</a>
                </div>
            </div>
            <div class="countdown-timer-container">
                <div id="countdown-${member.name}" class="text-2xl font-bold countdown-timer"></div>
            </div>
        `;
        $("#countdowns").append(countdownElement);

        const updateCountdown = () => {
            const now = new Date().getTime();
            const endDate = new Date(member.endDate).getTime();
            const distance = endDate - now;

            if (distance <= 0) {
                clearInterval(countdownInterval);
                document.getElementById(`countdown-${member.name}`).innerText = "Pengumuman hasil telah keluar!";
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById(`countdown-${member.name}`).innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
    });

});
