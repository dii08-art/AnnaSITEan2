// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Anna",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Happy 2 year's of us!",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🌺', '˚⊱🪷⊰˚']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Have we've known each other for 2 year's?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I am artificial intelligence and not a real living human!"           // Secret hover message
        },
        second: {
            text: "Do you love little old me?",                          // For the love meter
            startText: "Yes!",                                   // Text before the percentage
            nextBtn: "Onwards! (tried thinking of something corny)"                                         // Text for the next button
        },
        third: {
            text: "With the amount of time we've been freinds then best friends and finally in a steamy romantic reletionship I hope I have the right to ask you if will be my valetine?", // The big question!
            yesBtn: "Yes! Oh danny yes! Yes! Yes!",                                             // Text for "Yes" button
            noBtn: "No we're breaking up."                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "YIPIEEEEEEE",  // Shows when they go past 5000%
        high: "more more more more",              // Shows when they go past 1000%
        normal: "yay"                           // Shows when they go past 100%
    },

   // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay, you've made this brown boy happy with your answer :) ",
        message: "Now come kiss me on my hot wet steamy mouth...",
        emojis: "💗💖💋💗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dvvtuyhz7/video/upload/v1770437214/Marias_-_Carino__mp3.pm_qod9pb.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
