export default {
  methods: {
    getHexNumber(column, row) {
      return this.pad(column) + this.pad(row);
    },
    pad(n) {
      return (n < 10) ? (`0${n}`) : n;
    },
  },
};
