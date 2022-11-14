import mock from "../mock";

// ** Utils
import { paginateArray } from "../utils";

const data = {
  invoices: [
    {
      id: 4987,
      issuedDate: "13 Oct 2022",
      client: {
        address: "111, Fargona Kochasi, Fargona",
        company: "RashMilk",
        companyEmail: "ravshan@rashmilk.uz",
        country: "Uzbekistan",
        contact: "(616) 865-4180",
        name: "Ravshan Norbekov",
      },
      service: "Sut savdosi",
      total: 3428,
      avatar: "",
      invoiceStatus: "Paid",
      balance: "$300",
      dueDate: "23 Oct 2022",
    },
  ],
};

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet("/apps/invoice/invoices").reply((config) => {
  // eslint-disable-next-line object-curly-newline
  const {
    q = "",
    perPage = 10,
    page = 1,
    status = null,
    sort,
    sortColumn,
  } = config;
  /* eslint-enable */

  const dataAsc = data.invoices.sort((a, b) => {
    if (a[sortColumn]) {
      return a[sortColumn] < b[sortColumn] ? -1 : 1;
    } else {
      const splitColumn = sortColumn.split(".");
      const columnA = a[splitColumn[0]][splitColumn[1]];
      const columnB = b[splitColumn[0]][splitColumn[1]];
      return columnA < columnB ? -1 : 1;
    }
  });

  const dataToFilter = sort === "asc" ? dataAsc : dataAsc.reverse();

  const queryLowered = q.toLowerCase();
  const filteredData = dataToFilter.filter((invoice) => {
    if (String("paid").includes(queryLowered) && invoice.balance === 0) {
      return invoice.balance === 0;
    } else {
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      return (
        (invoice.client.companyEmail.toLowerCase().includes(queryLowered) ||
          invoice.client.name.toLowerCase().includes(queryLowered) ||
          String(invoice.id).toLowerCase().includes(queryLowered) ||
          String(invoice.total).toLowerCase().includes(queryLowered) ||
          String(invoice.balance).toLowerCase().includes(queryLowered) ||
          invoice.dueDate.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() ===
          (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
      );
    }
  });
  /* eslint-enable  */

  return [
    200,
    {
      allData: data.invoices,
      total: filteredData.length,
      invoices:
        filteredData.length <= perPage
          ? filteredData
          : paginateArray(filteredData, perPage, page),
    },
  ];
});

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet(/\/api\/invoice\/invoices\/\d+/).reply((config) => {
  // // Get event id from URL
  const invoiceId = Number(
    config.url.substring(config.url.lastIndexOf("/") + 1)
  );

  const invoiceIndex = data.invoices.findIndex((e) => e.id === invoiceId);
  const responseData = {
    invoice: data.invoices[invoiceIndex],
    paymentDetails: {
      totalDue: "$12,110.55",
      bankName: "American Bank",
      country: "United States",
      iban: "ETD95476213874685",
      swiftCode: "BR91905",
    },
  };
  return [200, responseData];
});

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete("/apps/invoice/delete").reply((config) => {
  // Get invoice id from URL
  let invoiceId = config.id;

  // Convert Id to number
  invoiceId = Number(invoiceId);

  const invoiceIndex = data.invoices.findIndex((t) => t.id === invoiceId);
  data.invoices.splice(invoiceIndex, 1);

  return [200];
});

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet("/api/invoice/clients").reply(() => {
  const clients = data.invoices.map((invoice) => invoice.client);
  return [200, clients.slice(0, 5)];
});
