module.exports = {
    customerList: 'select * from customers limit ?, ?',
    customerCount: 'select count(*) cnt from customers',
    customerInsert: 'insert into customers set ?',
    customerDelete: 'delete from customers where id = ?',
    customerUpdate: 'update customers set ? where id = ?'
}