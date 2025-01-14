import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "rustique",
    title: "Rustique - Python Collections with Rust Performance",
    description: "A Python library built using Rust and PyO3 that provides performance-optimized alternatives to Python's built-in List and Dict types.",
    tags: ["Python", "Rust", "PyO3", "Performance", "Collections"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/philipsolarz/rustique"
      }
    ],
    content: `
## Overview
**Rustique** is a Python library that reimplements Python's built-in \`list\` and \`dict\` types using Rust and PyO3. The primary goal is to experiment with Rust's performance advantages while closely mimicking the behavior of Python's collection types. This project is in its early stages and is primarily focused on learning and experimentation.

## Installation
Rustique can be installed via pip:

\`\`\`bash
pip install rustique
\`\`\`

Installing Rustique also installs the compiled Rust binary, built using PyO3. Ensure you have \`pip\` and a compatible Python environment ready.

## Usage
Rustique collections can be used in a manner similar to Python's built-in types:

\`\`\`python
import rustique as rs

# Using Rustique List
lst = rs.List([1, 2, 3])
lst.append(4)
print(lst)  # Output: [1, 2, 3, 4]

# Using Rustique Dict
dct = rs.Dict({'key': 'value'})
dct['another_key'] = 'another_value'
print(dct)  # Output: {'key': 'value', 'another_key': 'another_value'}
\`\`\`

## Features
- **Type Hinting**: Fully supports Python's native type hinting.
- **Behavior**: Mimics Python's \`list\` and \`dict\` closely, including error handling and dunder methods.
- **Optimizations**: Leverages Rust for performance improvements (currently focused on single-threaded use cases).
- **Future Plans**:
  - Additional data structures (e.g., typed lists and typed dicts)
  - Primitive types like Int and Float
  - Exploring Rust concurrency and parallelism features.

## Implementation Details
Rustique integrates Python and Rust through PyO3. The Rust components are compiled into a binary during installation, ensuring efficient execution.

## Testing and Development
Rustique is currently tested with Python 3.12 but may work on other versions. Cross-platform compatibility is expected, though not yet extensively verified.

Automated tests and CI pipelines are planned to validate:
- Compatibility with Python built-ins
- Performance improvements
- Edge case behavior and error handling

## Vision
Rustique aims to balance performance experimentation with the familiarity of Python's built-ins. While its primary goal is learning and development, future iterations may introduce innovative Rust-based features or become a more performance-oriented Python library.
    `
  },
  {
    id: "philipsolarz-dev",
    title: "philipsolarz.dev - Personal Portfolio",
    description: "A personal portfolio built with Next.js, Tailwind CSS, and shadcn to showcase projects, articles, and experience.",
    tags: ["Next.js", "Tailwind CSS", "shadcn", "Framer Motion", "ReactTyped"],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/philipsolarz/philipsolarz.dev"
      },
      {
        title: "Live Portfolio",
        url: "https://philipsolarz.com"
      }
    ],
    content: `
## Overview
**philipsolarz.dev** is a personal portfolio designed to highlight projects, skills, and experience for job opportunities and freelancing. It features a modern, minimalistic design with dynamic components for interactivity.

## Features
- **Profile Section**: Includes a timeline component to showcase career highlights and milestones.
- **Projects Section**: Displays a grid of projects with dedicated pages for each project. Each page features markdown content with syntax highlighting for code snippets.
- **Articles Section**: Displays a grid of articles with markdown content, syntax highlighting, and support for rich text formatting.
- **Contact Section**: A static section with contact methods, including social links and email.

## Design and Technology
- **Design**: Minimalistic and modern, leveraging Tailwind CSS and shadcn for styling and component integration.
- **Dynamic Components**:
  - **Framer Motion**: Used for animations, such as page transitions and interactive elements.
  - **ReactTyped**: Used for animated text in headers and introductions.
  - **React Syntax Highlighter**: Adds syntax highlighting to both project and article pages.

## Implementation Details
- **Next.js**:
  - Uses Static Site Generation (SSG) for project and article pages.
  - Optimized for performance with image optimization and lazy loading.
- **Markdown**: Both projects and articles are written in markdown for flexibility and readability.
- **Deployment**: Deployed on Vercel for seamless updates and performance.

## Future Plans
- Expand portfolio with additional interactive features, such as:
  - Dynamic content management (e.g., admin panel for projects and articles).
  - Enhanced animations for a more engaging user experience.
  - Integration of analytics and newsletter signup.
- Additional sections for certifications or testimonials.

## Vision
This portfolio serves as a living project, evolving with skills and experience, while maintaining a balance between static content and dynamic interactivity.
    `
  },
  {
    id: "philipsolarz-music",
    title: "philipsolarz.music - Music Portfolio",
    description: "A personal music portfolio showcasing tracks with interactive playback, built with Next.js, Tailwind CSS, shadcn, and wavesurfer.js.",
    tags: ["Next.js", "Tailwind CSS", "shadcn", "wavesurfer.js", "Music"],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/philipsolarz/philipsolarz.music"
      },
      {
        title: "Live Music Portfolio",
        url: "https://music.philipsolarz.com"
      }
    ],
    content: `
## Overview
**philipsolarz.music** is a personal portfolio showcasing original music tracks. Visitors can explore tracks in grid or list view, listen to music directly through an interactive audio player, and view track details such as title, cover art, and links.

## Features
- **Track Display**:
  - Supports both **grid view** and **list view** for exploring tracks.
  - Displays title, cover art, and links to external platforms (e.g., Spotify, SoundCloud).
- **Interactive Audio Player**:
  - Powered by **wavesurfer.js** for waveform visualization.
  - Allows playback with an interactive waveform, play/pause button, and volume control.
  - Playback bar appears at the bottom of the page during active playback.
- **Responsive Design**:
  - Aims to adapt seamlessly to various screen sizes, though optimization is still in progress.

## Implementation Details
- **Next.js**: Handles page routing and static site generation for optimized performance.
- **Wavesurfer.js**: Powers the interactive waveform and audio playback.
- **Tailwind CSS & shadcn**: Provides the minimalistic and modern styling, leveraging utility classes and prebuilt components.

## Deployment
Deployed on **Vercel** for fast and reliable performance with CI/CD integration.

## Future Plans
- Add advanced player features like:
  - Track queuing, repeat, and shuffle functionality.
  - Playlist creation for users.
- Integrate basic analytics to track user interactions, such as plays and downloads.
- Enhance responsiveness and refine the design for smaller screens.

## Vision
The goal of **philipsolarz.music** is to provide an elegant platform for showcasing original music while maintaining a focus on user experience and visual appeal. As a living project, it will continue to evolve with new features and design improvements.
    `
  },
  {
    id: "spc-toolbox",
    title: "Statistical Process Control Toolbox",
    description: "A Python library providing tools for monitoring and analyzing manufacturing processes using Statistical Process Control (SPC) charts.",
    tags: ["Python", "SPC", "Quality Assurance", "Manufacturing", "Data Visualization"],
    links: [
      {
        title: "GitHub Repository",
        url: "https://github.com/philipsolarz/spc-toolbox" // Update with actual URL
      },
    ],
    content: `
## Overview
The **Statistical Process Control (SPC) Toolbox** is a comprehensive library designed for quality assurance professionals and engineers to monitor and analyze manufacturing processes. It provides several SPC charts to identify and manage variations, ensuring high standards of quality.

## Installation
Install the SPC Toolbox using pip:

\`\`\`bash
pip install spc-toolbox
\`\`\`

## Quick Start Example
Here's an example of creating and visualizing an X-Bar chart:

\`\`\`python
import pandas as pd
from spc_toolbox import XBarChart

# Load data from CSV
df = pd.read_csv("data/XBar-RChart.csv")

# Initialize XBarChart
xbarChart = XBarChart()

# Fit data to the chart
xbarChart.fit(index=df.index, values=df, axis=1, dispersion_type="range")

# Plot the chart
xbarChart.plot()
\`\`\`

## Features
The SPC Toolbox includes several types of control charts:
- **XBarChart**: Monitors the average of subgroup means.
- **RChart**: Tracks the range within subgroups.
- **SChart**: Monitors subgroup standard deviation.
- **PChart**: Tracks the proportion of defective items.
- **UChart**: Monitors defects per unit of output.
- **IChart**: Tracks individual measurements for process variations.
- **MRChart**: Monitors the moving range of observations.

### Rules and Customization
Users can define custom rules to detect out-of-control conditions. For example:

\`\`\`python
def custom_rule(chart):
    return ((chart.lower_control_limit < chart.y) & (chart.y < chart.upper_control_limit)).all()

results = xbarChart.evaluate_rules(rules={"custom_rule": custom_rule})
\`\`\`

## Documentation
Each chart class includes methods for:
- **Data Fitting**: Fit data to calculate control limits and centerlines.
- **Visualization**: Plot control charts for analysis.
- **Customization**: Add, modify, or remove rules for monitoring.

## Example Use Cases
1. **Monitoring Process Mean**: Use XBar and R charts to assess consistency in manufacturing output.
2. **Defect Tracking**: Use P and U charts to evaluate defects in production lines.
3. **Variability Analysis**: Use MR and S charts to understand and control process variability.

## Future Plans
- Add support for additional SPC charts and advanced rules.
- Provide integrations with data sources like SQL and APIs for real-time analysis.
- Enhance visualization options with interactive charts.

## Vision
The SPC Toolbox aims to simplify quality management in manufacturing processes, empowering professionals with actionable insights through statistical analysis.
    `
  },
  //   {
  //     id: "kubernetes-cluster",
  //     title: "Kubernetes Production Cluster",
  //     description: "Designed and implemented a highly available Kubernetes cluster with automated CI/CD pipelines and monitoring.",
  //     tags: ["Kubernetes", "DevOps", "Docker", "Terraform", "Prometheus"],
  //     links: [
  //       {
  //         title: "GitHub",
  //         url: "https://github.com/username/k8s-cluster"
  //       },
  //       {
  //         title: "Documentation",
  //         url: "https://docs.example.com/k8s-cluster"
  //       }
  //     ],
  //     content: `
  // ## Overview
  // This project implements a production-grade Kubernetes cluster with full observability and GitOps practices.

  // \`\`\`yaml
  // apiVersion: apps/v1
  // kind: Deployment
  // metadata:
  //   name: example-deployment
  // spec:
  //   replicas: 3
  //   selector:
  //     matchLabels:
  //       app: example
  //   template:
  //     metadata:
  //       labels:
  //         app: example
  //     spec:
  //       containers:
  //       - name: example
  //         image: nginx:1.14.2
  //         ports:
  //         - containerPort: 80
  // \`\`\`

  // ## Features
  // - High Availability setup with multiple control plane nodes
  // - Automated deployment pipelines using ArgoCD
  // - Comprehensive monitoring with Prometheus and Grafana
  // - Infrastructure as Code using Terraform
  // - Secret management with HashiCorp Vault

  // ## Implementation Details
  // The cluster was implemented using the following technologies...
  //     `
  //   },

]




// import { Project } from "@/types"

// export const projects: Project[] = [
//   {
//     id: "rustique",
//     title: "Rustique",
//     description: "A Python library implementing Rust-like data structures with enhanced performance using PyO3.",
//     longDescription: "Rustique is a Python library that provides drop-in replacements for Python's built-in data structures, implemented in Rust using PyO3. It offers significant performance improvements while maintaining familiar Python interfaces for Lists and Dictionaries.",
//     tags: ["Rust", "Python", "PyO3", "Data Structures", "Performance Optimization"],
//     githubUrl: "https://github.com/philipsolarz/rustique",
//     documentation: {
//       overview: "Rustique bridges the gap between Python's ease of use and Rust's performance, providing drop-in replacements for common Python data structures. It's built using PyO3 to create Python bindings for Rust implementations.",
//       features: [
//         "Drop-in replacements for Python List and Dict",
//         "Significant performance improvements over Python built-ins",
//         "Thread-safe implementations",
//         "Memory-efficient data structures",
//         "Fully compatible with Python's standard interfaces"
//       ],
//       technical: "Built using Rust and PyO3 for Python bindings. The library implements custom data structures in Rust while maintaining Python's interface conventions. It uses advanced Rust features like generics and lifetime management to ensure memory safety.",
//       codeExamples: [
//         {
//           title: "Using Rustique List",
//           language: "python",
//           code: `from rustique import RustList

// # Create a new list
// rust_list = RustList([1, 2, 3, 4, 5])

// # Operations are similar to Python list
// rust_list.append(6)
// first_element = rust_list[0]

// # Efficient bulk operations
// rust_list.extend(range(7, 10))
// filtered = rust_list.filter(lambda x: x % 2 == 0)`
//         },
//         {
//           title: "Rust Implementation",
//           language: "rust",
//           code: `use pyo3::prelude::*;
// use pyo3::types::PyList;

// #[pyclass]
// struct RustList {
//     inner: Vec<PyObject>
// }

// #[pymethods]
// impl RustList {
//     #[new]
//     fn new() -> Self {
//         RustList { inner: Vec::new() }
//     }

//     fn append(&mut self, item: PyObject) {
//         self.inner.push(item);
//     }

//     fn __getitem__(&self, idx: isize) -> PyResult<PyObject> {
//         let len = self.inner.len() as isize;
//         let idx = if idx < 0 { len + idx } else { idx };
//         self.inner.get(idx as usize)
//             .cloned()
//             .ok_or_else(|| PyErr::new::<pyo3::exceptions::PyIndexError, _>("Index out of range"))
//     }
// }`
//         }
//       ]
//     }
//   },
//   {
//     id: "philipsolarz-music",
//     title: "philipsolarz.music",
//     description: "A personal music portfolio website showcasing various musical projects and compositions.",
//     longDescription: "A modern, responsive website built with Next.js that serves as a central hub for all musical projects. Features include project showcases, embedded audio players, and integration with music streaming platforms.",
//     tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Audio API"],
//     githubUrl: "https://github.com/philipsolarz/music",
//     externalUrl: "https://philipsolarz-music.vercel.app/",
//     documentation: {
//       overview: "philipsolarz.music is a personal music portfolio website that provides a centralized platform for showcasing musical projects, compositions, and collaborations. Built with modern web technologies to ensure optimal performance and user experience.",
//       features: [
//         "Responsive design for all devices",
//         "Custom audio player implementation",
//         "Integration with music streaming platforms",
//         "Project categorization and filtering",
//         "Dynamic routing for project pages"
//       ],
//       technical: "Built using Next.js 13 with App Router, TypeScript, and Tailwind CSS. Implements the Web Audio API for custom audio playback features and uses static site generation for optimal performance.",
//       codeExamples: [
//         {
//           title: "Custom Audio Player Component",
//           language: "tsx",
//           code: `'use client';

// import { useState, useRef } from 'react';
// import { Play, Pause, Volume2 } from 'lucide-react';
// import { Slider } from '@/components/ui/slider';

// interface AudioPlayerProps {
//   url: string;
//   title: string;
// }

// export function AudioPlayer({ url, title }: AudioPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const togglePlayback = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="flex items-center gap-4 p-4 rounded-lg bg-card">
//       <button
//         onClick={togglePlayback}
//         className="h-10 w-10 flex items-center justify-center"
//       >
//         {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
//       </button>
//       <div className="flex-1">
//         <Slider
//           value={[progress]}
//           max={100}
//           step={1}
//           onValueChange={(value) => {
//             if (audioRef.current) {
//               const time = (value[0] / 100) * audioRef.current.duration;
//               audioRef.current.currentTime = time;
//             }
//           }}
//         />
//       </div>
//       <audio
//         ref={audioRef}
//         src={url}
//         onTimeUpdate={(e) => {
//           const audio = e.currentTarget;
//           setProgress((audio.currentTime / audio.duration) * 100);
//         }}
//       />
//     </div>
//   );
// }`
//         }
//       ]
//     }
//   },
//   {
//     id: "spc-toolbox",
//     title: "SPC Toolbox",
//     description: "A Python library providing statistical process control tools with a focus on bar chart analysis.",
//     longDescription: "SPC Toolbox is a specialized Python library that implements various statistical process control methods, with a particular emphasis on bar chart analysis and visualization. It provides easy-to-use tools for quality control and process monitoring.",
//     tags: ["Python", "Statistics", "Data Analysis", "Matplotlib", "NumPy"],
//     githubUrl: "https://github.com/philipsolarz/spc-toolbox",
//     documentation: {
//       overview: "SPC Toolbox simplifies statistical process control analysis by providing a collection of helper methods specifically designed for bar charts and related visualizations. It integrates with common data science libraries while offering specialized SPC functionality.",
//       features: [
//         "Customizable bar chart generation",
//         "Statistical process control calculations",
//         "Control limit computation",
//         "Trend analysis tools",
//         "Integration with pandas DataFrames"
//       ],
//       technical: "Built in Python using NumPy for calculations and Matplotlib for visualizations. Implements various statistical algorithms for process control and provides both functional and object-oriented interfaces.",
//       codeExamples: [
//         {
//           title: "Basic Bar Chart Analysis",
//           language: "python",
//           code: `from spc_toolbox import BarChart
// import numpy as np

// # Create sample data
// data = np.random.normal(100, 15, 30)

// # Create and configure bar chart
// chart = BarChart(data)
// chart.set_control_limits(sigma=3)
// chart.add_trend_analysis()

// # Generate visualization
// chart.plot(
//     title="Process Control Chart",
//     xlabel="Sample Number",
//     ylabel="Measurement"
// )`
//         },
//         {
//           title: "Control Limits Implementation",
//           language: "python",
//           code: `class ControlLimits:
//     def __init__(self, data: np.ndarray):
//         self.data = data
//         self.mean = np.mean(data)
//         self.std = np.std(data)

//     def calculate_limits(self, sigma: float = 3) -> tuple:
//         """Calculate upper and lower control limits."""
//         ucl = self.mean + (sigma * self.std)
//         lcl = self.mean - (sigma * self.std)
//         return ucl, lcl

//     def check_violations(self) -> np.ndarray:
//         """Check for control limit violations."""
//         ucl, lcl = self.calculate_limits()
//         return (self.data > ucl) | (self.data < lcl)

//     def get_capability_indices(self) -> dict:
//         """Calculate process capability indices."""
//         cp = (self.ucl - self.lcl) / (6 * self.std)
//         cpk = min(
//             (self.ucl - self.mean) / (3 * self.std),
//             (self.mean - self.lcl) / (3 * self.std)
//         )
//         return {"cp": cp, "cpk": cpk}`
//         }
//       ]
//     }
//   }
// ]

