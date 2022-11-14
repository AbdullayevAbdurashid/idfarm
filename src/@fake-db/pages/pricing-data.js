import mock from "../mock";

const data = {
  pricing: {
    basicPlan: {
      title: "Bronza",
      img: require("@src/assets/images/illustration/Pot1.svg").default,
      subtitle: "2ta bo'lim kichik fermalar uchun",
      monthlyPrice: 30,
      yearlyPlan: {
        perMonth: 25,
        totalAnnual: 25 * 12,
      },
      planBenefits: ["Asosiy bo'lim", "Chorva bo'limi", "BONUS:Chat"],
      popular: false,
    },
    standardPlan: {
      title: "Silver",
      img: require("@src/assets/images/illustration/Pot2.svg").default,
      subtitle: "O'rta darajadagi fermerlar uchun",
      monthlyPrice: 50,
      yearlyPlan: {
        perMonth: 40,
        totalAnnual: 40 * 12,
      },
      planBenefits: [
        "Asosiy bo'limi",
        "Chorva bo'limi",
        "Ombor bo'limi",
        "Moliya bo'limi",
        "BONUS:Chat",
      ],
      popular: true,
    },
    enterprisePlan: {
      title: "Gold",
      img: require("@src/assets/images/illustration/Pot3.svg").default,
      subtitle: "Katta fermalar uchun yechim",
      monthlyPrice: 70,
      yearlyPlan: {
        perMonth: 60,
        totalAnnual: 60 * 12,
      },
      planBenefits: [
        "Asosiy bo'limi",
        "Chorva bo'limi",
        "Ombor bo'limi",
        "Moliya bo'limi",
        "Chat ",
        "Xodimlar bilan ishlash",
        "BONUS :Mobil ilova",
      ],
      popular: false,
    },
    qandA: [
      {
        question: "Does my subscription automatically renew?",
        ans: "Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.",
      },
      {
        question: "Can I store the item on an intranet so everyone has access?",
        ans: "Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.",
      },
      {
        question: "Am I allowed to modify the item that I purchased?",
        ans: "Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.",
      },
    ],
  },
};

mock.onGet("/pricing/data").reply(() => [200, data.pricing]);
