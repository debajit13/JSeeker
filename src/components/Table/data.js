const data = [
  {
    companyName: "Adobe",
    carrearURL: "https://www.adobe.com/careers.html",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Adobe-Reviews-E1090.htm",
  },

  {
    companyName: "Microsoft",
    carrearURL: "https://careers.microsoft.com/us/en",
    glassdoorURL:
      "https://www.glassdoor.com/Reviews/Microsoft-Reviews-E1651.htm",
  },

  {
    companyName: "Intuit",
    carrearURL: "https://www.intuit.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Intuit-Reviews-E2293.htm",
  },
  {
    companyName: "Atlassian",
    carrearURL: "https://www.atlassian.com/company/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Atlassian-Reviews-E115699.htm",
  },
  {
    companyName: "J P Morgan & Chase",
    carrearURL: "https://careers.jpmorgan.com/IN/en/home",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/J-P-Morgan-Reviews-E145.htm",
  },
  {
    companyName: "Arcesium",
    carrearURL: "https://www.arcesium.com/careers.html",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Arcesium-Reviews-E1148900.htm",
  },
  {
    companyName: "Uber",
    carrearURL: "https://www.uber.com/us/en/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Uber-Reviews-E575263.htm",
  },
  {
    companyName: "D E Shaw",
    carrearURL: "https://www.deshaw.com/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/D-E-Shaw-India-Reviews-E351722.htm",
  },
  {
    companyName: "Goldman Sachs",
    carrearURL: "https://www.goldmansachs.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Goldman-Sachs-Reviews-E2800.htm",
  },
  {
    companyName: "Morgan Stanley",
    carrearURL: "https://www.morganstanley.com/people",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Morgan-Stanley-Reviews-E2282.htm",
  },
  {
    companyName: "Mcafee",
    carrearURL: "https://careers.mcafee.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/McAfee-Reviews-E2244.htm",
  },
  {
    companyName: "Flipkart",
    carrearURL: "https://www.flipkartcareers.com/#!/joblist",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Flipkart-Reviews-E300494.htm",
  },
  {
    companyName: "Myntra",
    carrearURL: "https://careers.myntra.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Myntra-Reviews-E508705.htm",
  },
  {
    companyName: "1mg",
    carrearURL: "https://www.1mg.com/jobs",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/1mg-Reviews-E1202639.htm",
  },
  {
    companyName: "Delhivery Couriers & Logistics",
    carrearURL: "https://www.delhivery.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Delhivery-Reviews-E513409.htm",
  },
  {
    companyName: "Cisco",
    carrearURL: "https://www.cisco.com/c/en/us/about/careers.html",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Cisco-Systems-Reviews-E1425.htm",
  },
  {
    companyName: "MindTickle",
    carrearURL: "https://www.mindtickle.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Overview/Working-at-MindTickle-EI_IE543637.11,21.htm",
  },
  {
    companyName: "Directi",
    carrearURL: "https://careers.directi.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Directi-Reviews-E250446.htm",
  },
  {
    companyName: "LinkedIn",
    carrearURL: "https://careers.linkedin.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/LinkedIn-Reviews-E34865.htm",
  },
  {
    companyName: "Zeta",
    carrearURL: "https://www.zeta.tech/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Zeta-Reviews-E1533308.htm",
  },
  {
    companyName: "Paytm",
    carrearURL: "https://paytm.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Paytm-Reviews-E1159356.htm",
  },
  {
    companyName: "Dunzo",
    carrearURL: "https://www.dunzo.com/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Dunzo-Bangalore-Reviews-EI_IE1616162.0,5_IL.6,15_IM1091.htm?filter.iso3Language=eng",
  },
  {
    companyName: "Media.net",
    carrearURL: "https://careers.media.net/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Media-net-Reviews-E1042683.htm",
  },
  {
    companyName: "Razorpay",
    carrearURL: "https://razorpay.com/jobs/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Razorpay-Reviews-E1146550.htm?filter.iso3Language=eng",
  },
  {
    companyName: "Gojek",
    carrearURL: "https://www.gojek.io/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Gojek-Reviews-E1282114.htm?filter.iso3Language=eng",
  },
  {
    companyName: "InMobi",
    carrearURL: "https://www.inmobi.com/company/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/InMobi-Reviews-E373348.htm",
  },
  {
    companyName: "Toppr",
    carrearURL: "https://www.toppr.com/jobs/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Overview/Working-at-Toppr-com-EI_IE1143038.11,20.htm",
  },
  {
    companyName: "Curefit",
    carrearURL: "https://www.cure.fit/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Cure-Fit-Reviews-E1675320.htm",
  },
];

export default data;
