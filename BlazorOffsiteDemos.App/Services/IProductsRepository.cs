using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlazorOffsiteDemos.App.Services
{
    public interface IProductsRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();

        Task SaveChangesAsync();

        event EventHandler StateChanged;
    }

    public class Product
    {
        public int ProductId { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool IsInStock { get; set; }
    }
}
