import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import moment from 'moment'

const changeModalState = jest.fn()
const reverse = jest.fn()
const workOrders = [
{cases: 68,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.157Z",
id: 40,
method: "Coffee Maker",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.157Z",
},
{cases: 13,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:22.902Z",
id: 2,
method: "Pour Over",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:22.902Z",
},
{cases: 58,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:22.908Z",
id: 3,
method: "French Press",
notes: null,
packets: 50,
priority: true,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:22.908Z",
},
{cases: 42,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:24.252Z",
id: 200,
method: "Pour Over",
notes: null,
packets: 25,
priority: true,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:24.252Z",
},
{cases: 84,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:24.136Z",
id: 183,
method: "Cold Brew",
notes: null,
packets: 50,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:24.136Z",
},
{cases: 66,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:24.091Z",
id: 177,
method: "Cold Brew",
notes: null,
packets: 25,
priority: true,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:24.091Z",
},
{cases: 66,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.015Z",
id: 19,
method: "Aeropress",
notes: null,
packets: 50,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.015Z",
},
{cases: 50,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:23.864Z",
id: 145,
method: "Pour Over",
notes: null,
packets: 50,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.864Z",
},
{cases: 88,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.690Z",
id: 120,
method: "French Press",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.690Z",
},
{cases: 3,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.652Z",
id: 114,
method: "Aeropress",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.652Z",
},
{cases: 78,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:23.064Z",
id: 26,
method: "Coffee Maker",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.064Z",
},
{cases: 20,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.570Z",
id: 101,
method: "Pour Over",
notes: null,
packets: 25,
priority: true,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.570Z",
},
{cases: 53,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.520Z",
id: 94,
method: "Pour Over",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.520Z",
},
{cases: 6,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:23.503Z",
id: 91,
method: "Cold Brew",
notes: "best order ever",
packets: 25,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.503Z",
},
{cases: 50,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.307Z",
id: 63,
method: "Pour Over",
notes: null,
packets: 50,
priority: false,
ship_date: "2018-10-08",
updated_at: "2018-10-07T17:44:23.307Z",
},
{cases: 21,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.283Z",
id: 59,
method: "Cold Brew",
notes: "best order ever",
packets: 25,
priority: false,
ship_date: "2018-10-09",
updated_at: "2018-10-07T17:44:23.283Z",
},
{cases: 36,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.270Z",
id: 57,
method: "Cold Brew",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-09",
updated_at: "2018-10-07T17:44:23.270Z",
},
{cases: 5,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-09T21:32:25.941Z",
id: 204,
method: "Cold Brew",
notes: "",
packets: 25,
priority: false,
ship_date: "2018-10-09",
updated_at: "2018-10-09T21:32:25.941Z",
},
{cases: 1,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-09T21:32:49.311Z",
id: 205,
method: "AeroPress",
notes: "",
packets: 25,
priority: true,
ship_date: "2018-10-09",
updated_at: "2018-10-09T21:32:49.311Z",
},
{cases: 1,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-09T21:57:46.369Z",
id: 206,
method: "Pour Over",
notes: "",
packets: 25,
priority: true,
ship_date: "2018-10-09",
updated_at: "2018-10-09T21:57:46.369Z",
},
{cases: 1,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-09T22:01:53.997Z",
id: 207,
method: "AeroPress",
notes: "",
packets: 25,
priority: false,
ship_date: "2018-10-09",
updated_at: "2018-10-09T22:01:53.997Z",
},
{cases: 64,
coffee: "Bella Donovan",
completed: false,
created_at: "2018-10-07T17:44:23.595Z",
id: 105,
method: "Aeropress",
notes: null,
packets: 50,
priority: false,
ship_date: "2018-10-10",
updated_at: "2018-10-07T17:44:23.595Z",
},
{cases: 59,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:23.677Z",
id: 118,
method: "Coffee Maker",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-10",
updated_at: "2018-10-07T17:44:23.677Z",
},
{cases: 9,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-07T17:44:23.601Z",
id: 106,
method: "Aeropress",
notes: null,
packets: 25,
priority: false,
ship_date: "2018-10-10",
updated_at: "2018-10-07T17:44:23.601Z",
},
{cases: 20,
coffee: "Giant Steps",
completed: false,
created_at: "2018-10-09T22:49:48.055Z",
id: 211,
method: "French Press",
notes: "Notes Test",
packets: 25,
priority: true,
ship_date: "2018-10-10",
updated_at: "2018-10-09T22:49:48.055Z"
}
]

it('renders without crashing', () => {
  const wrapper = shallow(
    <Table  reverse={reverse}
            changeModalState={changeModalState} 
            workOrders={workOrders}/>
  );

  expect(wrapper).toMatchSnapshot()
});

it("shows list of work orders in table", () => {
  const wrapper = mount(
    <Table  reverse={reverse}
      changeModalState={changeModalState} 
      workOrders={workOrders}/>
  );

  const text = wrapper.find('tbody').text();

  expect(text).toContain(workOrders[0].id);
  expect(text).toContain(moment(workOrders[2].ship_date).format('MM/DD/YYYY'));
  expect(text).toContain(workOrders[4].coffee);
  expect(text).toContain(workOrders[7].cases);
  expect(text).toContain(workOrders[15].packets);
  expect(text).toContain(workOrders[20].method);
});

it("shows a star next to orders with priority", () => {
  const wrapper = mount(
    <Table  reverse={reverse}
      changeModalState={changeModalState} 
      workOrders={workOrders}/>
  );

  const text = wrapper.find('tbody').text();

  expect(text).toContain('10/10/2018 ★');
});

it("contains columns for coffee, method, cases, packets, ship date, order, and action", () => {
  const wrapper = mount(
    <Table  reverse={reverse}
      changeModalState={changeModalState} 
      workOrders={workOrders}/>
  );

  const text = wrapper.find('thead').text();

  expect(text).toContain('Coffee');
  expect(text).toContain('Method');
  expect(text).toContain('Number of Cases');
  expect(text).toContain('Packets per Case');
  expect(text).toContain('Ship Date');
  expect(text).toContain('Order');
  expect(text).toContain('View');
});


it("should list 25 work orders at a time on each page", () => {
  const wrapper = mount(
    <Table  reverse={reverse}
      changeModalState={changeModalState} 
      workOrders={workOrders}/>
  );

  const tableRows = wrapper.find('tbody > tr');

  expect(tableRows).toHaveLength(25)
});


