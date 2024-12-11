import { createStore } from "vuex";

const store = createStore({
  state: {
    students: [],
    filters: {
      name: "",
      minGpa: null,
      maxGpa: null,
      startDate: null,
      endDate: null,
      gender: true,
      department: "",
      class: "",
    },
    sortBy: "name",
  },
  getters: {
    filteredStudent(state) {
      let result = [...state.students];
      if (
        !state.filters.name &&
        state.filters.minGpa == null &&
        state.filters.maxGpa == null &&
        state.filters.startDate == null &&
        state.filters.endDate == null &&
        state.filters.gender === true &&
        !state.filters.department &&
        !state.filters.class
      ) {
        return result; // Nếu không có filter nào, trả về tất cả sinh viên
      }
      if (state.filters.name) {
        result = result.filter((student) =>
          student.name.toLowerCase().includes(state.filters.name.toLowerCase())
        );
      }
      if (state.filters.minGpa != null && state.filters.maxGpa != null) {
        result = result.filter((student) => {
          return (
            student.gpa >= state.filters.minGpa &&
            student.gpa <= state.filters.maxGpa
          );
        });
      }
      if (state.filters.startDate != null && state.filters.endDate != null) {
        result = result.filter((student) => {
          const birth = new Date(student.birthDate);
          return (
            birth >= new Date(state.filters.startDate) &&
            birth <= new Date(state.filters.endDate)
          );
        });
      }
      if (state.filters.gender) {
        result = result.filter(
          (student) => student.gender === state.filters.gender
        );
      }
      if (state.filters.department) {
        result = result.filter((student) =>
          student.department
            .toLowerCase()
            .includes(state.filters.department.toLowerCase())
        );
      }
      if (state.filters.class) {
        result = result.filter((student) =>
          student.class
            .toLowerCase()
            .includes(state.filters.class.toLowerCase())
        );
      }

      if (state.sortBy == "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else if (state.sortBy == "gpa") {
        result.sort((a, b) => b.gpa - a.gpa);
      } else if (state.sortBy === "birth") {
        result.sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate));
      }
      return result;
    },
    getStudentById: (state) => (id) => {
      console.log("Fetching student with id:", id);
      // Kiểm tra id đầu vào
      const student = state.students.find(
        (student) => student.id === parseInt(id)
      );
      if (!student) {
        console.log("Student not found");
      }
      return student;
    },
  },
  mutations: {
    addStudent(state, student) {
      student.id = Date.now();
      state.students.push(student);
    },
    updateStudent(state, updateStudent) {
      const index = state.students.findIndex(
        (student) => student.id === updateStudent.id
      );
      if (index !== -1) {
        state.students[index] = updateStudent;
      }
    },
    deleteStudent(state, studentId) {
      state.students = state.students.filter(
        (student) => student.id !== studentId
      );
    },
    updatedFilters(state, newFilter) {
      state.filters = { ...state.filters, ...newFilter };
    },
    updateSortBy(state, sortBy) {
      state.sortBy = sortBy;
    },
  },
  actions: {
    addStudent({ commit }, student) {
      commit("addStudent", student);
    },
    updatedStudent({ commit }, updateStudent) {
      commit("updateStudent", updateStudent);
    },
    deleteStudent({ commit }, studentId) {
      commit("deleteStudent", studentId);
    },
    updatedFilters({ commit }, newFilter) {
      commit("updatedFilters", newFilter);
    },
    updateSortBy({ commit }, sortBy) {
      commit("updateSortBy", sortBy);
    },
  },
});
export default store;
