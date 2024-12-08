module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'normalColor': '#007AFF',
        'secondColor': '#514DDF',
        // 'normalBlack': '#090909',
        // 'grayDarker': '#323232',
        // 'blueLight':'#E9EFFD',
        // 'grayNormal': '#909090',
        // 'blueDarkActive': '#112D69',
        // 'black90': 'rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'bgHeroHome': 'linear-gradient(90deg, #007AFF 64%, #1E1E1E 100%)',
        'bgWhyHome': 'linear-gradient(180deg, rgba(28, 35, 43, 0.1) 0%, rgba(1, 122, 255, 0.1) 23%)',
        'bgStagesHome': 'linear-gradient(90deg, #FFFFFF 4%, rgba(15, 23, 42, 0.447059) 60%)',
        'bgstartnow': 'linear-gradient(90deg, #FFFFFF 0%, #0D6EFD 52%)',
        'bgCandidate': 'linear-gradient(90deg, #017AFF 35.5%, #1A293A 90.5%)',
        'bgTypeElection': 'linear-gradient(180deg, #FFFFFF 0%, #417AD1 100%)',
        'bgDetails': 'linear-gradient(180deg, rgba(160, 212, 251, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)',


      },
    },
  },
  plugins: [],
};

