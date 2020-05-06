/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 300,

    // История транзакций
    transactions: [{ id: "_6rkdoy9yq", amount: 300, type: "deposit" }],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        let transaction = {};
        transaction['id'] = ID();
        transaction['amount'] = amount;
        transaction['type'] = type;
        this.transactions.push(transaction);
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance = this.balance + amount;
        this.createTransaction(amount, 'deposit');
        console.log(`Зачисление ${amount} гривен на счёт успешно завершено`);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (this.balance < amount) {
            return (`Cнятие ${amount} гривен не возможно, недостаточно средств`);
        }
        this.balance = this.balance - amount;
        this.createTransaction(amount, 'withdraw');
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return console.log(`На вашем счету ${this.balance} гривен`);
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transcation in this.transactions) {
            let transactionInfo = this.transactions[transcation];
            if (transactionInfo.id === id) {
                console.log(`Транзакция под идентификационным номером '${id}' найдена. Детали транзакции: `, transactionInfo)
                return
            } else {
                console.log(`Транзакция под идентификационным номером '${id}' не найдена`);
                return
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        // Не понял,что именно надо,так что написал и для вывода истории транзакций по типу и для вывода суммы по типу транзакции 
        let transactionTotal = 0;
        for (let typeOfTranscation in this.transactions) {
            if (this.transactions[typeOfTranscation].type === type) {
                transactionTotal += this.transactions[typeOfTranscation].amount
            }
            // let historyOfTransactions = [];
            // for (let typeOfTranscation in this.transactions) {
            //     if (this.transactions[typeOfTranscation].type === type) {
            //         historyOfTransactions.push(this.transactions[typeOfTranscation])
            //     }
            // } return historyOfTransactions;

        } return (`Общая сумма транзакций типа '${type}' - ${transactionTotal} гривен. `)
    }
}
const ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};


// console.log(account.deposit(700));
// console.log(account.withdraw(1000));
// console.log(account.deposit(500));
// console.log(account.withdraw(400));
// console.log(account.withdraw(300));
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails("_6rkdoy9yq"));
// console.log(account.getTransactionDetails("_6rkdoddsayq"));
// console.log(account.getTransactionTotal("withdraw"));
// console.log(account.getTransactionTotal("deposit"));

