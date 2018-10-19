using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlazorOffsiteDemos.App.Services
{
    public class DefaultProductsRepository : IProductsRepository
    {
        private Product[] _products = new Product[]
        {
            new Product { ProductId = 1, DisplayName = "Curly-wurly straw", Description = "Amaze your friends with this cheap plastic tube", IsInStock = true },
            new Product { ProductId = 2, DisplayName = "Pepsi Connoisseur (12mo subscription)", Description = "Covers all developments in the world of Pepsi™", IsInStock = false },
            new Product { ProductId = 3, DisplayName = "Recarbonator Pro", Description = "Revitalize your old beverages in just hours", IsInStock = true },
        };

        public event EventHandler StateChanged;

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            await Task.Delay(2000);
            return _products;
        }

        public Task SaveChangesAsync()
        {
            StateChanged?.Invoke(this, null);
            return Task.CompletedTask;
        }
    }
}
