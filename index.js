
        // Bank Account Factory Function using Closure
        function createBankAccount(initialBalance = 0) {
            let balance = initialBalance;
            let transactionCount = 0;
            let totalDeposits = 0;
            let totalWithdrawals = 0;
            const transactions = [];
            const createdAt = new Date();

            return {
                deposit: function(amount) {
                    if (amount <= 0) {
                        throw new Error("Deposit amount must be positive");
                    }
                    balance += amount;
                    transactionCount++;
                    totalDeposits += amount;
                    transactions.push({
                        type: 'deposit',
                        amount: amount,
                        timestamp: new Date(),
                        balance: balance
                    });
                    this.updateUI();
                    return balance;
                },

                withdraw: function(amount) {
                    if (amount <= 0) {
                        throw new Error("Withdrawal amount must be positive");
                    }
                    if (amount > balance) {
                        throw new Error("Insufficient funds");
                    }
                    balance -= amount;
                    transactionCount++;
                    totalWithdrawals += amount;
                    transactions.push({
                        type: 'withdrawal',
                        amount: amount,
                        timestamp: new Date(),
                        balance: balance
                    });
                    this.updateUI();
                    return balance;
                },

                resetAccount: function() {
                    balance = initialBalance;
                    transactionCount = 0;
                    totalDeposits = 0;
                    totalWithdrawals = 0;
                    transactions.length = 0;
                    this.updateUI();
                    this.showMessage("Account reset successfully!", "success");
                    return balance;
                },

                getBalance: function() {
                    return balance;
                },

                getTransactionHistory: function() {
                    return [...transactions].reverse();
                },

                getStats: function() {
                    return {
                        totalDeposits,
                        totalWithdrawals,
                        transactionCount,
                        accountAge: Math.floor((new Date() - createdAt) / 1000)
                    };
                },

                updateUI: function() {
                    // Update balance
                    document.getElementById('balance').textContent = `₹${balance}`;
                    
                    // Update transaction count
                    document.getElementById('transactionCount').textContent = transactionCount;
                    
                    // Update stats
                    const stats = this.getStats();
                    document.getElementById('totalDeposits').textContent = `₹${totalDeposits}`;
                    document.getElementById('totalWithdrawals').textContent = `₹${totalWithdrawals}`;
                    
                    // Update account age
                    const minutes = Math.floor(stats.accountAge / 60);
                    const seconds = stats.accountAge % 60;
                    document.getElementById('accountAge').textContent = 
                        `${minutes}m ${seconds}s ago`;
                    
                    // Update transaction history
                    this.updateTransactionList();
                },

                updateTransactionList: function() {
                    const transactionList = document.getElementById('transactionList');
                    const transactions = this.getTransactionHistory();
                    
                    if (transactions.length === 0) {
                        transactionList.innerHTML = '<p class="no-transactions">No transactions yet</p>';
                        return;
                    }
                    
                    transactionList.innerHTML = transactions.map(transaction => `
                        <div class="transaction-item ${transaction.type}">
                            <div>
                                <span class="transaction-type">${transaction.type.toUpperCase()}</span>
                                <div style="font-size: 0.8rem; color: #666;">
                                    ${transaction.timestamp.toLocaleTimeString()}
                                </div>
                            </div>
                            <div class="transaction-amount ${transaction.type}-amount">
                                ${transaction.type === 'deposit' ? '+' : '-'}₹${transaction.amount}
                            </div>
                        </div>
                    `).join('');
                },

                showMessage: function(message, type = "success") {
                    const messageDiv = document.getElementById('message');
                    messageDiv.innerHTML = `
                        <div class="${type === 'success' ? 'success-message' : 'error-message'}">
                            ${message}
                        </div>
                    `;
                    setTimeout(() => {
                        messageDiv.innerHTML = '';
                    }, 3000);
                }
            };
        }

        // Initialize bank account
        const account = createBankAccount(5000);

        // Custom amount handlers
        function handleCustomDeposit() {
            const amountInput = document.getElementById('customAmount');
            const amount = parseInt(amountInput.value);
            
            if (!amount || amount <= 0) {
                account.showMessage("Please enter a valid amount", "error");
                return;
            }
            
            try {
                account.deposit(amount);
                account.showMessage(`Successfully deposited ₹${amount}`, "success");
                amountInput.value = '';
            } catch (error) {
                account.showMessage(error.message, "error");
            }
        }

        function handleCustomWithdraw() {
            const amountInput = document.getElementById('customAmount');
            const amount = parseInt(amountInput.value);
            
            if (!amount || amount <= 0) {
                account.showMessage("Please enter a valid amount", "error");
                return;
            }
            
            try {
                account.withdraw(amount);
                account.showMessage(`Successfully withdrew ₹${amount}`, "success");
                amountInput.value = '';
            } catch (error) {
                account.showMessage(error.message, "error");
            }
        }

        // Initialize UI
        account.updateUI();

        // Add keyboard event for custom amount input
        document.getElementById('customAmount').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleCustomDeposit();
            }
        });