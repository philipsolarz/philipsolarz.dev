import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "rustique",
    title: "Rustique",
    description: "A Python library implementing Rust-like data structures with enhanced performance using PyO3.",
    longDescription: "Rustique is a Python library that provides drop-in replacements for Python's built-in data structures, implemented in Rust using PyO3. It offers significant performance improvements while maintaining familiar Python interfaces for Lists and Dictionaries.",
    tags: ["Rust", "Python", "PyO3", "Data Structures", "Performance Optimization"],
    githubUrl: "https://github.com/philipsolarz/rustique",
    documentation: {
      overview: "Rustique bridges the gap between Python's ease of use and Rust's performance, providing drop-in replacements for common Python data structures. It's built using PyO3 to create Python bindings for Rust implementations.",
      features: [
        "Drop-in replacements for Python List and Dict",
        "Significant performance improvements over Python built-ins",
        "Thread-safe implementations",
        "Memory-efficient data structures",
        "Fully compatible with Python's standard interfaces"
      ],
      technical: "Built using Rust and PyO3 for Python bindings. The library implements custom data structures in Rust while maintaining Python's interface conventions. It uses advanced Rust features like generics and lifetime management to ensure memory safety.",
      codeExamples: [
        {
          title: "Using Rustique List",
          language: "python",
          code: `from rustique import RustList

# Create a new list
rust_list = RustList([1, 2, 3, 4, 5])

# Operations are similar to Python list
rust_list.append(6)
first_element = rust_list[0]

# Efficient bulk operations
rust_list.extend(range(7, 10))
filtered = rust_list.filter(lambda x: x % 2 == 0)`
        },
        {
          title: "Rust Implementation",
          language: "rust",
          code: `use pyo3::prelude::*;
use pyo3::types::PyList;

#[pyclass]
struct RustList {
    inner: Vec<PyObject>
}

#[pymethods]
impl RustList {
    #[new]
    fn new() -> Self {
        RustList { inner: Vec::new() }
    }

    fn append(&mut self, item: PyObject) {
        self.inner.push(item);
    }

    fn __getitem__(&self, idx: isize) -> PyResult<PyObject> {
        let len = self.inner.len() as isize;
        let idx = if idx < 0 { len + idx } else { idx };
        self.inner.get(idx as usize)
            .cloned()
            .ok_or_else(|| PyErr::new::<pyo3::exceptions::PyIndexError, _>("Index out of range"))
    }
}`
        }
      ]
    }
  },
  {
    id: "philipsolarz-music",
    title: "philipsolarz.music",
    description: "A personal music portfolio website showcasing various musical projects and compositions.",
    longDescription: "A modern, responsive website built with Next.js that serves as a central hub for all musical projects. Features include project showcases, embedded audio players, and integration with music streaming platforms.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Audio API"],
    githubUrl: "https://github.com/philipsolarz/music",
    externalUrl: "https://music.philipsolarz.dev",
    documentation: {
      overview: "philipsolarz.music is a personal music portfolio website that provides a centralized platform for showcasing musical projects, compositions, and collaborations. Built with modern web technologies to ensure optimal performance and user experience.",
      features: [
        "Responsive design for all devices",
        "Custom audio player implementation",
        "Integration with music streaming platforms",
        "Project categorization and filtering",
        "Dynamic routing for project pages"
      ],
      technical: "Built using Next.js 13 with App Router, TypeScript, and Tailwind CSS. Implements the Web Audio API for custom audio playback features and uses static site generation for optimal performance.",
      codeExamples: [
        {
          title: "Custom Audio Player Component",
          language: "tsx",
          code: `'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  url: string;
  title: string;
}

export function AudioPlayer({ url, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
      <button
        onClick={togglePlayback}
        className="h-10 w-10 flex items-center justify-center"
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>
      <div className="flex-1">
        <Slider
          value={[progress]}
          max={100}
          step={1}
          onValueChange={(value) => {
            if (audioRef.current) {
              const time = (value[0] / 100) * audioRef.current.duration;
              audioRef.current.currentTime = time;
            }
          }}
        />
      </div>
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={(e) => {
          const audio = e.currentTarget;
          setProgress((audio.currentTime / audio.duration) * 100);
        }}
      />
    </div>
  );
}`
        }
      ]
    }
  },
  {
    id: "spc-toolbox",
    title: "SPC Toolbox",
    description: "A Python library providing statistical process control tools with a focus on bar chart analysis.",
    longDescription: "SPC Toolbox is a specialized Python library that implements various statistical process control methods, with a particular emphasis on bar chart analysis and visualization. It provides easy-to-use tools for quality control and process monitoring.",
    tags: ["Python", "Statistics", "Data Analysis", "Matplotlib", "NumPy"],
    githubUrl: "https://github.com/philipsolarz/spc-toolbox",
    documentation: {
      overview: "SPC Toolbox simplifies statistical process control analysis by providing a collection of helper methods specifically designed for bar charts and related visualizations. It integrates with common data science libraries while offering specialized SPC functionality.",
      features: [
        "Customizable bar chart generation",
        "Statistical process control calculations",
        "Control limit computation",
        "Trend analysis tools",
        "Integration with pandas DataFrames"
      ],
      technical: "Built in Python using NumPy for calculations and Matplotlib for visualizations. Implements various statistical algorithms for process control and provides both functional and object-oriented interfaces.",
      codeExamples: [
        {
          title: "Basic Bar Chart Analysis",
          language: "python",
          code: `from spc_toolbox import BarChart
import numpy as np

# Create sample data
data = np.random.normal(100, 15, 30)

# Create and configure bar chart
chart = BarChart(data)
chart.set_control_limits(sigma=3)
chart.add_trend_analysis()

# Generate visualization
chart.plot(
    title="Process Control Chart",
    xlabel="Sample Number",
    ylabel="Measurement"
)`
        },
        {
          title: "Control Limits Implementation",
          language: "python",
          code: `class ControlLimits:
    def __init__(self, data: np.ndarray):
        self.data = data
        self.mean = np.mean(data)
        self.std = np.std(data)

    def calculate_limits(self, sigma: float = 3) -> tuple:
        """Calculate upper and lower control limits."""
        ucl = self.mean + (sigma * self.std)
        lcl = self.mean - (sigma * self.std)
        return ucl, lcl

    def check_violations(self) -> np.ndarray:
        """Check for control limit violations."""
        ucl, lcl = self.calculate_limits()
        return (self.data > ucl) | (self.data < lcl)

    def get_capability_indices(self) -> dict:
        """Calculate process capability indices."""
        cp = (self.ucl - self.lcl) / (6 * self.std)
        cpk = min(
            (self.ucl - self.mean) / (3 * self.std),
            (self.mean - self.lcl) / (3 * self.std)
        )
        return {"cp": cp, "cpk": cpk}`
        }
      ]
    }
  }
]

