// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: 'Предприятие 1',
    departments: [
      {
        id: 2,
        name: 'Отдел тестирования',
        employees_count: 10,
      },
      {
        id: 3,
        name: 'Отдел маркетинга',
        employees_count: 20,
      },
      {
        id: 4,
        name: 'Администрация',
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: 'Предприятие 2',
    departments: [
      {
        id: 6,
        name: 'Отдел разработки',
        employees_count: 50,
      },
      {
        id: 7,
        name: 'Отдел маркетинга',
        employees_count: 20,
      },
      {
        id: 8,
        name: 'Отдел охраны труда',
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: 'Предприятие 3',
    departments: [
      {
        id: 10,
        name: 'Отдел аналитики',
        employees_count: 0,
      },
    ],
  },
];

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

function getEnterprisesInfo(enterprises) {
  let result = ``;
  enterprises.forEach((enterprise) => {
    let employeesSum = enterprise.departments.reduce((sum, department) => (sum += department.employees_count), 0);
    result += `${enterprise.name} (${employeesSum ? employeesSum : 'нет'} сотрудников)\n`;
    enterprise.departments.forEach(({ name, employees_count }) => {
      if (name === 'Администрация') {
        result += `- ${name} (${employees_count ? employees_count : 'нет'} человек)\n`;
      } else {
        result += `- ${name} (${employees_count ? employees_count : 'нет'} сотрудников)\n`;
      }
    });
  });
  return result.slice(0, -1);
}
// console.log(getEnterprisesInfo(enterprises))

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

function getEnterpriseByDepartmentIDorName(searchParametr) {
  let enterprise = enterprises.find(({ departments }) => {
    return departments.find(({ id, name }) => name === searchParametr || id === searchParametr);
  });
  return enterprise?.name ?? 'No found';
}

// Пример:
// console.log(getEnterpriseByDepartmentIDorName(8));
// console.log(getEnterpriseByDepartmentIDorName("Отдел маркетинга"));

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

function getNewID(enterprises) {
  const maxEnterpriseId = enterprises.reduce((acc, { id }) => {
    if (id > acc) {
      acc = id;
    }
    return acc;
  }, 0);

  const departmentsIds = [];
  enterprises.forEach(({ departments }) => departments.forEach(({ id }) => departmentsIds.push(id)));

  return Math.max(maxEnterpriseId, ...departmentsIds) + 1;
}

function addEnterprise(enterpriseName) {
  if (typeof enterpriseName !== 'string') {
    throw new Error('Wrong data');
  }

  const enterprise = {
    id: getNewID(enterprises),
    name: enterpriseName,
    departments: [],
  };
  enterprises.push(enterprise);
}

// Пример:
// addEnterprise("Название нового предприятия");
// addEnterprise("Название нового предприятия2");
// console.log(enterprises)

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
function addDepartment(idDepartment, name) {
  if (typeof idDepartment !== 'number' || typeof name !== 'string') {
    throw new Error('Wrong data');
  }
  const enterprise = enterprises.find(({ id }) => idDepartment === id);
  if (!enterprise) {
    throw new Error('Not found enterprise');
  }

  const newDepartment = {
    id: getNewID(enterprises),
    name,
    employees_count: 0,
  };
  enterprise.departments.push(newDepartment);
}
// Пример:

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
function getEnterprise(enterprises, enterpriseId) {
  return enterprises.find(({ id }) => id === enterpriseId);
}

function editEnterprise(enterpriseId, enterpriseName) {
  if (typeof enterpriseId !== 'number' || typeof name !== 'string') {
    throw new Error('Wrong data');
  }
  const enterprise = getEnterprise(enterprises, enterpriseId);
  if (!enterprise) {
    throw new Error('Not found enterprise');
  }
  enterprise.name = enterpriseName;
}

// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
function getDepartment(enterprises, departmentId) {
  let targetDepartment;
  enterprises.forEach(({ departments }) => {
    departments.forEach((department) => {
      if (department.id === departmentId) {
        targetDepartment = department;
      }
    });
  });
  return targetDepartment;
}

function editDepartment(departmentId, departmentName) {
  if (typeof departmentId !== 'number' || typeof departmentName !== 'string') {
    throw new Error('Wrong data');
  }
  const department = getDepartment(enterprises, departmentId);
  if (department) {
    department.name = departmentName;
  }
}
// Пример:
// editDepartment(7, "Новое название отдела");

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

function deleteEnterprise(enterpriseId) {
  if (typeof enterpriseId !== 'number') {
    throw new Error('Wrong data');
  }

  const indexToDeleteEnterprise = enterprises.findIndex(({ id }) => id === enterpriseId);

  if (!getEnterprise(enterprises, enterpriseId)) {
    throw new Error('Not found enterprise');
  }
  enterprises.splice(indexToDeleteEnterprise, 1);
}
// Пример:
// deleteEnterprise(9);

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

function deleteDepartment(departmentId) {
  if (typeof departmentId !== 'number') {
    throw new Error('Wrong data');
  }
  let indexToDelete;
  let indexEnterprise;
  const enterprise = enterprises.find(({ departments }, index) => {
    indexEnterprise = index;
    return departments.find(({ id, employees_count }, index) => {
      if (id === departmentId && !employees_count) {
        indexToDelete = index;
        return true;
      }
    });
  });
  console.log(enterprises[indexEnterprise].departments.splice(indexToDelete, 1));
}
// Пример:
//deleteDepartment(10);

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
function moveEmployees(fromIdDepartment, toIdDepartment) {
  if (getEnterpriseByDepartmentIDorName(fromIdDepartment) !== getEnterpriseByDepartmentIDorName(toIdDepartment)) {
    throw new Error('Different Enterprise');
  }

  if (typeof fromIdDepartment !== 'number' || typeof toIdDepartment !== 'number') {
    throw new Error('Wrong data');
  }

  const fromDepartment = getDepartment(enterprises, fromIdDepartment);
  const toDepartment = getDepartment(enterprises, toIdDepartment);

  if (!fromDepartment || !toDepartment) {
    throw new Error('Not found');
  }

  toDepartment.employees_count += fromDepartment.employees_count;
  fromDepartment.employees_count = 0;
}
// Пример:
// moveEmployees(6, 7);
// console.log(enterprises);
