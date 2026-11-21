import runpy
import unittest
from pathlib import Path

next_release = runpy.run_path(str(Path(__file__).with_name("release-notes.py")))["next_release"]


class ReleaseVersionTest(unittest.TestCase):
    def test_minor_after_highest_version(self):
        self.assertEqual(next_release(["v0.7.0", "before-pr-1161", "v0.6.12"], ""),
                         ("v0.7.0", "v0.8.0"))
        self.assertEqual(next_release(["v0.9.0", "v0.10.3"], ""), ("v0.10.3", "v0.11.0"))

    def test_explicit_patch_and_collisions(self):
        self.assertEqual(next_release(["v0.7.0"], "0.7.1"), ("v0.7.0", "v0.7.1"))
        for invalid in ["0.7.0", "0.6.9", "0.08.0", "v0.8.0", "0.8.0\ninvalid"]:
            with self.assertRaises(ValueError):
                next_release(["v0.7.0"], invalid)
