// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ],
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ],
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
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
      let employeesSum = enterprise.departments.reduce(
        (sum, department) => (sum += department.employees_count),
        0
      );
      result += `${enterprise.name} (${
        employeesSum ? employeesSum : "нет"
      } сотрудников)\n`;
      enterprise.departments.forEach(({ name, employees_count }) => {
        if (name === "Администрация") {
          result += `- ${name} (${
            employees_count ? employees_count : "нет"
          } человек)\n`;
        } else {
          result += `- ${name} (${
            employees_count ? employees_count : "нет"
          } сотрудников)\n`;
        }
      });
    });
    return result.slice(0, -1);
  }
  // console.log(getEnterprisesInfo(enterprises))
  
  // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).
  
  function getEnterpriseName(searchParametr) {
    if (typeof searchParametr === "number") {
      let enterprise = enterprises.find(({ departments }) => {
        return departments.find(({ id }) => id === searchParametr);
      });
      return enterprise?.name ?? "No found";
    } else {
      let enterprise = enterprises.find(({ departments }) => {
        return departments.find(({ name }) => name === searchParametr);
      });
      return enterprise?.name ?? "No found";
    }
  }
  
  // Пример:
  // getEnterpriseName(4)
  // getEnterpriseName("Отдел маркетинга")
  
  // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
  
  function addEnterprise(enterpriseName) {
    if (typeof enterpriseName !== "string") {
      throw new Error("Wrong data");
    }
  
    function getMaxEnterpriseId(enterprises) {
      return enterprises.reduce((acc, { id }) => {
        if (id > acc) {
          acc = id;
        }
        return acc;
      }, 0);
    }
  
    function getDepartmentsIds(enterprises) {
      const ids = [];
      enterprises.forEach(({ departments }) =>
        departments.forEach(({ id }) => ids.push(id))
      );
      return ids;
    }
  
    const enterprise = {
      id:
        Math.max(
          Math.max(...getDepartmentsIds(enterprises)),
          getMaxEnterpriseId(enterprises)
        ) + 1,
      name: enterpriseName,
      departments: [],
    };
    enterprises.push(enterprise);
  }
  
  // Пример:
  // addEnterprise("Название нового предприятия");
  
  // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
  function addDepartment(idDepartment, name) {
    if (typeof idDepartment !== "number" || typeof name !== "string") {
      throw new Error("Wrong data");
    }
    const enterprise = enterprises.find(({ id }) => idDepartment === id);
    if (!enterprise) {
      throw new Error("Not found enterprise");
    }
  
    function getMaxEnterpriseId(enterprises) {
      return enterprises.reduce((acc, { id }) => {
        if (id > acc) {
          acc = id;
        }
        return acc;
      }, 0);
    }
  
    function getDepartmentsIds(enterprises) {
      const ids = [];
      enterprises.forEach(({ departments }) =>
        departments.forEach(({ id }) => ids.push(id))
      );
      return ids;
    }
  
    const newDepartment = {
      id:
        Math.max(
          Math.max(...getDepartmentsIds(enterprises)),
          getMaxEnterpriseId(enterprises)
        ) + 1,
      name,
      employees_count: 0,
    };
    enterprise.departments.push(newDepartment);
  }
  // Пример:
  // addDepartment(5, "Название нового отдела");
  
  // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
  
  function editEnterprise(enterpriseId, enterpriseName) {
    if (typeof enterpriseId !== "number" || typeof name !== "string") {
      throw new Error("Wrong data");
    }
    const enterprise = enterprises.find(({ id }) => id === enterpriseId);
    if (!enterprise) {
      throw new Error("Not found enterprise");
    }
    enterprise.name = enterpriseName;
  }
  
  // Пример:
  // editEnterprise(1, "Новое название предприятия")
  
  // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
  function editDepartment(departmentId, departmentName) {
    if (typeof departmentId !== "number" || typeof departmentName !== "string") {
      throw new Error("Wrong data");
    }
    enterprises.forEach(({ departments }) => {
      departments.forEach((department) => {
        if (department.id === departmentId) {
          department.name = departmentName;
        }
      });
    });
  }
  // Пример:
  // editDepartment(7, "Новое название отдела");
  
  // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
  
  function deleteEnterprise(enterpriseId) {
    if (typeof enterpriseId !== "number") {
      throw new Error("Wrong data");
    }
    let indexToDelete;
    const enterpriseToDelete = enterprises.find(({ id }, index) => {
      if (id === enterpriseId) {
        indexToDelete = index;
        return true;
      }
    });
    if (!enterpriseToDelete) {
      throw new Error("Not found enterprise");
    }
    enterprises.splice(indexToDelete, 1);
  }
  // Пример:
  // deleteEnterprise(1);
  // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
  
  function deleteDepartment(departmentId) {
    if (typeof departmentId !== "number") {
      throw new Error("Wrong data");
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
    console.log(
      enterprises[indexEnterprise].departments.splice(indexToDelete, 1)
    );
  }
  // Пример:
  //deleteDepartment(10);
  
  // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
  function moveEmployees(fromIdDepartment, toIdDepartment) {
    if (typeof fromIdDepartment !== "number" || typeof toIdDepartment !== "number") {
      throw new Error("Wrong data");
    }
  
    let fromIndex;
    let toIndex;
  
    const fromEnterprise = enterprises.find(({ departments }) =>
      departments.find(({ id }, index) => {
        if (id === fromIdDepartment) {
          fromIndex = index;
          return true;
        }
      })
    );
  
    if (!fromEnterprise) {
      throw new Error("Not found");
    }
  
    const toEnterprise = enterprises.find(({ departments }) =>
      departments.find(({ id }, index) => {
        if (id === toIdDepartment) {
          toIndex = index;
          return true;
        }
      })
    );
  
    if (!toEnterprise) {
      throw new Error("Not found");
    }
    toEnterprise.departments[toIndex].employees_count +=
      fromEnterprise.departments[fromIndex].employees_count;
    fromEnterprise.departments[fromIndex].employees_count = 0;
  }
  // Пример:
  //moveEmployees(2, 6)