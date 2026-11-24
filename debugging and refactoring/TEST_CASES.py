import json
import tempfile
import unittest
from pathlib import Path

from process_data import DataProcessor


class TestExportCustomerData(unittest.TestCase):
    def test_json_export_writes_customer_data(self):
        processor = DataProcessor("customers.csv")
        processor.customers = {
            "C001": {
                "name": "Ada",
                "email": "ada@example.com",
                "join_date": "2024-01-01",
                "total_spent": 25.0,
                "transaction_count": 1,
            }
        }

        with tempfile.TemporaryDirectory() as temp_dir:
            output_file = Path(temp_dir) / "customers.json"
            result = processor.export_customer_data(str(output_file), "json")

            self.assertTrue(result)
            with output_file.open(encoding="utf-8") as file:
                exported_customers = json.load(file)

        self.assertEqual(exported_customers, processor.customers)


if __name__ == "__main__":
    unittest.main()
