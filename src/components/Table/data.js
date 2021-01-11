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
  {
    companyName: "Wallmart",
    carrearURL: "https://careers.walmart.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Walmart-Reviews-E715.htm",
  },
  {
    companyName: "Ola",
    carrearURL: "https://www.olacabs.com/careers",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Ola-Reviews-E587383.htm",
  },
  {
    companyName: "ShareChat",
    carrearURL: "https://we.sharechat.com/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/ShareChat-Reviews-E1776417.htm",
  },
  {
    companyName: "Udaan",
    carrearURL: "https://careers.udaan.com/#!/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/udaan-com-Reviews-E2023654.htm",
  },
  {
    companyName: "Nutanix",
    carrearURL: "https://www.nutanix.com/company/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Nutanix-Reviews-E429159.htm",
  },
  {
    companyName: "Informatica",
    carrearURL: "https://informatica.gr8people.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Informatica-Reviews-E8797.htm",
  },
  {
    companyName: "Tower Research",
    carrearURL: "https://informatica.gr8people.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Informatica-Reviews-E8797.htm",
  },
  {
    companyName: "Intel Corporation",
    carrearURL: "https://jobs.intel.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Intel-Corporation-Reviews-E1519.htm",
  },
  {
    companyName: "Paypal",
    carrearURL: "https://www.paypal.com/in/webapps/mpp/jobs",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/PayPal-Reviews-E9848.htm",
  },
  {
    companyName: "Yelp",
    carrearURL: "https://www.yelp.careers/us/en",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Yelp-Reviews-E43314.htm",
  },
  {
    companyName: "ThoughtWorks",
    carrearURL: "https://www.thoughtworks.com/careers/jobs",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/ThoughtWorks-Reviews-E38334.htm",
  },
  {
    companyName: "Zomato",
    carrearURL: "https://zomato.recruitee.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Zomato-Reviews-E515676.htm",
  },
  {
    companyName: "ByteDance",
    carrearURL: "https://jobs.bytedance.com/en/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/ByteDance-Reviews-E1624196.htm",
  },
  {
    companyName: "Makemytrip",
    carrearURL: "https://careers.makemytrip.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/MakeMyTrip-Reviews-E354629.htm",
  },
  {
    companyName: "Expedia",
    carrearURL: "https://lifeatexpediagroup.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Expedia-Group-Reviews-E9876.htm",
  },
  {
    companyName: "Postman",
    carrearURL: "https://www.postman.com/company/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Postman-Bangalore-Reviews-EI_IE1926052.0,7_IL.8,17_IM1091.htm?filter.iso3Language=eng",
  },
  {
    companyName: "Sprinklr",
    carrearURL: "https://www.sprinklr.com/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Sprinklr-Reviews-E427532.htm",
  },
  {
    companyName: "Swiggy",
    carrearURL: "https://careers.swiggy.com/#/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Swiggy-Reviews-E952680.htm",
  },
  {
    companyName: "Innovaccer",
    carrearURL: "https://innovaccer.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Innovaccer-Reviews-E721552.htm",
  },
  {
    companyName: "Mastercard",
    carrearURL:
      "https://www.mastercard.us/en-us/vision/who-we-are/careers.html",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Mastercard-Reviews-E3677.htm",
  },
  {
    companyName: "American Express",
    carrearURL: "https://jobs.americanexpress.com/india",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/American-Express-Reviews-E35.htm",
  },
  {
    companyName: "Visa",
    carrearURL: "https://www.visa.co.in/careers.html",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Visa-Inc-Reviews-E3035.htm",
  },
  {
    companyName: "ServiceNow",
    carrearURL: "https://www.servicenow.co.uk/careers.html",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/ServiceNow-Reviews-E403326.htm",
  },
  {
    companyName: "Oracle",
    carrearURL: "https://www.oracle.com/in/corporate/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Oracle-Reviews-E1737.htm",
  },
  {
    companyName: "Dream 11",
    carrearURL: "https://about.dream11.in/careers",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Dream11-Mumbai-Reviews-EI_IE493359.0,7_IL.8,14_IM1070.htm?filter.iso3Language=eng",
  },
  {
    companyName: "Vmware",
    carrearURL: "https://careers.vmware.com/main/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/VMware-Reviews-E12830.htm",
  },
  {
    companyName: "Western Digital",
    carrearURL: "https://jobs.westerndigital.com/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Western-Digital-Reviews-E1067.htm",
  },
  {
    companyName: "Rakuten",
    carrearURL: "https://rakuten.careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Rakuten-Reviews-E40197.htm",
  },
  {
    companyName: "Facebook",
    carrearURL: "https://www.facebook.com/careers/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Facebook-Reviews-E40772.htm",
  },
  {
    companyName: "Google",
    carrearURL: "https://careers.google.com/d/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Google-Reviews-E9079.htm",
  },
  {
    companyName: "Amazon",
    carrearURL: "https://www.amazon.jobs/en-gb/",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Amazon-Reviews-E6036.htm",
  },
  {
    companyName: "TCS",
    carrearURL: "https://www.tcs.com/careers?country=IN&lang=EN",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Tata-Consultancy-Services-Reviews-E13461.htm",
  },
  {
    companyName: "Cognizent",
    carrearURL: "https://careers.cognizant.com/au/en",
    glassdoorURL:
      "https://www.glassdoor.co.in/Reviews/Cognizant-Technology-Solutions-Reviews-E8014.htm",
  },
  {
    companyName: "Wipro",
    carrearURL: "https://careers.wipro.com/careers-home/",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Wipro-Reviews-E9936.htm",
  },
  {
    companyName: "Wipro",
    carrearURL: "https://careers.wipro.com/careers-home/",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Wipro-Reviews-E9936.htm",
  },
  {
    companyName: "Qualcomm",
    carrearURL: "https://www.qualcomm.com/company/careers",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Qualcomm-Reviews-E640.htm",
  },
  {
    companyName: "Texas Instruments",
    carrearURL: "https://careers.ti.com/",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Texas-Instruments-Reviews-E651.htm",
  },
  {
    companyName: "Samsung",
    carrearURL: "https://www.samsung.com/in/aboutsamsung/careers/careers-center/",
    glassdoorURL: "https://www.glassdoor.co.in/Reviews/Samsung-Electronics-Reviews-E3363.htm",
  },
];

export default data;
